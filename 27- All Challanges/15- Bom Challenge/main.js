let input = document.querySelector('.input');
let add = document.querySelector('.add');
let clear = document.querySelector('.clear');
let tasks = document.querySelector('.tasks');
let tasksList = [];

// Check if there are tasks in LocalStorage
if (window.localStorage.getItem('tasks')) {
  tasksList = JSON.parse(window.localStorage.getItem('tasks'));
  addTask(tasksList);
}

clear.onclick = function () {
  tasksList = [];
  tasks.innerHTML = '';
  window.localStorage.removeItem('tasks');
}

add.onclick = function () {
  if (input.value.trim() !== '') {
    const taskObject = {
      id: Date.now(),
      title: input.value.trim(),
    }
    if (window.localStorage.getItem('tasks')) {
      tasksList = JSON.parse(window.localStorage.getItem('tasks'));
    }
    tasksList.push(taskObject)
    addTask(tasksList);
  }
}

// Add the task to page and local storage at the same time
function addTask(tasksList) {
  // Empty the tasks div each time when we try to add any task to prevent adding any dublicated tasks
  if (tasksList.length > 0) {
    tasks.innerHTML = '';
  }
  // Add the task to page
  tasksList.forEach(t => {
    let taskContainer = document.createElement('div');
    taskContainer.setAttribute('id', t.id);
    let task = document.createElement('p');
    task.textContent = t.title;
    let delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    taskContainer.append(task);
    taskContainer.append(delBtn);
    tasks.append(taskContainer);
    // Add the task to the LocalStorage
    window.localStorage.setItem('tasks', JSON.stringify(tasksList));
    // Empty the input field each time after adding a task
    input.value = '';
    // Delete the task from each of page and LocalStorage
    delBtn.onclick = function () {
      this.parentNode.parentNode.removeChild(this.parentNode);
      tasksList = JSON.parse(window.localStorage.getItem('tasks'));
      tasksList = tasksList.filter((task) => task.id != this.parentNode.id);
      window.localStorage.setItem('tasks', JSON.stringify(tasksList));
    }
  });
}