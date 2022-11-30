let request = new XMLHttpRequest();

request.open("GET", "./articles.json");
request.send();

request.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    console.log(this.responseText);
    console.log("Data Loaded");
    let mainData = JSON.parse(this.responseText);
    for (object of mainData) {
      object['category'] = 'All';
    }
    console.log(mainData);
    let updatedData = JSON.stringify(mainData);
    console.log(updatedData);

    let dataDiv = document.createElement('div');
    dataDiv.setAttribute('id', 'data');
    for (object of mainData) {

      let div = document.createElement('div');

      let title = document.createElement('h2');
      title.innerText = `${object['title']}`

      let body = document.createElement('p');
      body.innerText = `${object['body']}`

      let author = document.createElement('p');
      author.innerText = `${object['author']}`

      let category = document.createElement('p');
      category.innerText = `${object['category']}`

      div.appendChild(title);
      div.appendChild(body);
      div.appendChild(author);
      div.appendChild(category);
      dataDiv.appendChild(div);
      document.body.appendChild(dataDiv);
    }
  }
}