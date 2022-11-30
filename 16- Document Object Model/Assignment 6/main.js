let myForm = document.getElementsByTagName('form')[0];
myForm.style.cssText = "display: grid; width: 100%; margin: 0 auto;";

let num = document.querySelector("[name='elements']");
num.style.cssText = "width: 350px; padding: 10px; margin: 10px auto;";

let text = document.querySelector("[name='texts']");
text.style.cssText = "width: 350px; padding: 10px; margin: 10px auto;";

let type = document.querySelector("[name='type']");
type.style.cssText = "width: 375px; padding: 12px; margin: 10px auto;";

let create = document.querySelector("[name='create']");
create.style.cssText =
  "width: 375px; padding: 12px; margin: 10px auto; font-size: 15px; font-weight: bold;\
  border: none; border-radius: 5px; cursor: pointer; background-color: #009688";

let resultDiv = document.getElementById('results');
resultDiv.style.cssText =
  "display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\
  width: 100%; height: auto; margin: 20px auto; background-color: #ececec";

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function createMyNodes(num, type) {
  if (num.value < 0) {
    num.value *= -1;
  }
  for (let i = 0; i < num.value ; i++) {
    let ele = document.createElement(type.value);
    ele.style.cssText =
      "display: flex; place-content: center; tilte: element; color: #fff; background-color: #ff5722; padding: 15px; margin: 15px;\
      font-size: 20px; border-radius: 5px;";
    ele.className = 'box';
    ele.id = `id-${i + 1}`
    ele.textContent = text.value;
    resultDiv.appendChild(ele);
  }
}

create.onclick = function (e) {
  e.preventDefault();
  if (resultDiv.hasChildNodes() === true) {
    removeAllChildNodes(resultDiv);
    createMyNodes(num,type);
  } else {
    createMyNodes(num,type);
  }
}