let newClasses = document.querySelector('.classes-to-add');
let removeExisitsClasses = document.querySelector('.classes-to-remove');
let currentClasses = document.querySelector("[title='Current']");
let outputDiv = document.querySelector('div.classes-list > div');

function removeAllDivChildNodes(outputDiv) {
  while (outputDiv.firstChild) {
    outputDiv.removeChild(outputDiv.firstChild);
  }
}

function printCurrentClasses() {
  let sortedExisitClassesArray = [];
  let exisitClassesArray = [];
  removeAllDivChildNodes(outputDiv);
  for (let i = 0; i < currentClasses.classList.length; i++) {
    sortedExisitClassesArray.push(currentClasses.classList[i]);
    sortedExisitClassesArray = sortedExisitClassesArray.sort();
  }
  for (let i = 0; i < sortedExisitClassesArray.length; i++) {
    exisitClassesArray.push(`<span>${sortedExisitClassesArray[i]}</span>`);
  }
  if (currentClasses.classList.length === 0) {
    outputDiv.textContent = 'No Classes To Show';
  } else {
    outputDiv.innerHTML = exisitClassesArray.join(' ');
  }
}
printCurrentClasses();

let arrayWithoutAnySpaces = [];
newClasses.onblur = function () {
  if (newClasses.value.trim().length === 0) {
    alert('Input field musn\'t be empty!')
  } else {
    let newClassesArray = newClasses.value.trim().split(' ');
    for (let cls of newClassesArray) {
      if (cls !== '') {
        arrayWithoutAnySpaces.push(cls)
      }
    }
    newClasses.value = '';
    for (let i = 0; i < arrayWithoutAnySpaces.length; i++) {
      currentClasses.classList.add(arrayWithoutAnySpaces[i].toString().toLowerCase());
    }
    printCurrentClasses()
  }
}

let exisitsClassesArrayWithoutSpaces = [];
removeExisitsClasses.onblur = function () {
  if (removeExisitsClasses.value.trim().length === 0) {
    alert('Input field musn\'t be empty!')
  } else {
    let removeExisitsClassesArray = removeExisitsClasses.value.trim().split(' ');
    for (let cls of removeExisitsClassesArray) {
      if (cls !== '') {
        exisitsClassesArrayWithoutSpaces.push(cls)
      }
    }
    removeExisitsClasses.value = '';
    for (let i = 0; i < exisitsClassesArrayWithoutSpaces.length; i++) {
      currentClasses.classList.remove(exisitsClassesArrayWithoutSpaces[i].toString().toLowerCase());
    }
    removeAllDivChildNodes(outputDiv);
    printCurrentClasses();
  }
}