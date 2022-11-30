let myImages = document.images;
for (let i = 0; i < myImages.length; i++) {
  if ( myImages[i].hasAttribute('alt')) {
    myImages[i].setAttribute('alt', 'old');
  }
  else {
    myImages[i].setAttribute('alt', 'Elzero New');
  }
}