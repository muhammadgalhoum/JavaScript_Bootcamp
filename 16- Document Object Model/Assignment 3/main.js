let theForm = document.getElementsByTagName("form")[0];
theForm.style.display = 'flex';
theForm.style.placeContent = 'center';
theForm.style.flexDirection = 'column';
theForm.style.width = '500px';
theForm.style.padding = '30px';
theForm.style.margin = '30px auto 0';
theForm.style.border = '1px solid black';

let outPut = document.getElementsByTagName("div")[0];
outPut.style.display = 'flex';
outPut.style.placeContent = 'center';
outPut.style.padding = '10px';
outPut.style.fontSize = '20px';
outPut.style.margin = '10px auto';
outPut.style.width = 'calc(100% - 20px)';
outPut.style.maxWidth = '100%';
outPut.style.overflow = 'auto';

let myInput = document.querySelector("[name='dollar']");
myInput.style.padding = '10px';
myInput.style.width = 'calc(100% - 24px)';
myInput.style.margin = '10px auto';

let dollar = document.getElementById('dollar');
let pound = document.getElementById('pound');

myInput.addEventListener('input', function (e) {
  if (e.target.value < 0) {
    e.target.value *= -1;
  }
  dollar.textContent = e.target.value;
  pound.textContent = (e.target.value * 24.48).toFixed(2);
});