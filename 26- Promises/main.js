const getData = (apiLink) => {
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();
    request.onload = function () {
      if (this.readyState === 4 && this.status === 200) {
        resolve(JSON.parse(this.responseText));
      } else {
        reject(Error("there is No Data Founded"))
      }
    };
    request.open("GET", apiLink);
    request.send();
  });
};

getData('./articles.json').then((result) => {
  result.length = 5;
  for (object of result) {
    let div = document.createElement('div');
    let title = document.createElement('h3');
    title.innerText = `${object['title']}`;
    let desc = document.createElement('p');
    desc.innerText = `${object['description']}`;
    div.appendChild(title);
    div.appendChild(desc);
    document.body.appendChild(div);
  };
  let sep = document.createElement('hr');
  document.body.appendChild(sep);
}).catch((reject) => console.log(reject)).finally(console.log('Done'));
// --------------------------------------------------------------------------------------------------------------
fetch('./articles.json')
.then((result) => {
  return result.json()
  }).then((result) => {
  result.length = 5;
  for (object of result) {
    let div = document.createElement('div');
    let title = document.createElement('h3');
    title.innerText = `${object['title']}`;
    let desc = document.createElement('p');
    desc.innerText = `${object['description']}`;
    div.appendChild(title);
    div.appendChild(desc);
    document.body.appendChild(div);
  };
})
// --------------------------------------------------------------------------------------------------------------
// Another way for the last task

async function fetchData() {
  try {
    let myData = await fetch('./articles.json');
    let neededData = await myData.json();
    neededData.length = 5;
    // console.log(neededData);
    let sep = document.createElement('hr');
    document.body.appendChild(sep);
    for (object of neededData) {
    let div = document.createElement('div');
    let title = document.createElement('h3');
    title.innerText = `${object['title']}`;
    let desc = document.createElement('p');
    desc.innerText = `${object['description']}`;
    div.appendChild(title);
    div.appendChild(desc);
    document.body.appendChild(div);
  };
  } catch (error) {
    console.log(`${error} happened!`)
  } finally {
    console.log('The Fetching of the Data has been ended')
  }
}

fetchData();