let div = document.querySelector('div');


let fontSelect = document.getElementById('fonts');
let fontOptions = document.querySelectorAll('#fonts option');

if (window.localStorage.getItem('fontFamily')) {
  div.style.fontFamily = window.localStorage.getItem('fontFamily');
  fontOptions.forEach((op) => {
    op.removeAttribute('selected');
  })
  document.querySelector(`[value="${window.localStorage.getItem('fontFamily')}"]`).setAttribute('selected', '');
}

fontSelect.addEventListener('change', function() {
  fontOptions.forEach((op) => {
    op.removeAttribute('selected');
    if (op.value === this.value) {
      op.setAttribute('selected','')
    }
  })
  window.localStorage.setItem('fontFamily', this.value)
  div.style.fontFamily = window.localStorage.getItem('fontFamily');
})


let colorSelect = document.getElementById('colors');
let colorOptions = document.querySelectorAll('#colors option');

if (window.localStorage.getItem('color')) {
  div.style.color = window.localStorage.getItem('color');
  colorOptions.forEach((op) => {
    op.removeAttribute('selected');
  })
  document.querySelector(`[value="${window.localStorage.getItem('color')}"]`).setAttribute('selected', '');
}

colorSelect.addEventListener('change', function() {
  colorOptions.forEach((op) => {
    op.removeAttribute('selected');
    if (op.value === this.value) {
      op.setAttribute('selected','')
    }
  })
  window.localStorage.setItem('color', this.value);
  div.style.color = window.localStorage.getItem('color');
})


let sizeSelect = document.getElementById('sizes');
let sizeOptions = document.querySelectorAll('#sizes option');

if (window.localStorage.getItem('fontSize')) {
  div.style.fontSize = window.localStorage.getItem('fontSize')+'px';
  sizeOptions.forEach((op) => {
    op.removeAttribute('selected');
  })
  document.querySelector(`[value="${window.localStorage.getItem('fontSize')}"]`).setAttribute('selected', '');
}

sizeSelect.addEventListener('change', function() {
  sizeOptions.forEach((op) => {
    op.removeAttribute('selected');
    if (op.value === this.value) {
      op.setAttribute('selected','')
    }
  })
  window.localStorage.setItem('fontSize', this.value);
  div.style.fontSize = window.localStorage.getItem('fontSize')+'px';
})