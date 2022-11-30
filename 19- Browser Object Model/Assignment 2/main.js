if (window.sessionStorage.getItem('name')) {
  document.getElementById('name').value = window.sessionStorage.getItem('name');
}

if (window.sessionStorage.getItem('faculty')) {
  document.getElementById('fac').value = window.sessionStorage.getItem('faculty');
}

if (window.sessionStorage.getItem('color')) {
  document.getElementById('color').value = window.sessionStorage.getItem('color');
}

if (window.sessionStorage.getItem('color')) {
  document.getElementById('color').value = window.sessionStorage.getItem('color');
}


document.getElementById('name').onblur = function () {
  window.sessionStorage.setItem('name', this.value)
}

document.getElementById('fac').onblur = function () {
  window.sessionStorage.setItem('faculty', this.value)
}

document.getElementById('color').onblur = function () {
  window.sessionStorage.setItem('color', this.value)
}

document.getElementById('country').onblur = function () {
  window.sessionStorage.setItem('country', this.value)
}