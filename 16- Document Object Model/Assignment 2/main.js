let allImages = document.images;
for (let i = 0; i < allImages.length; i++) {
  allImages[i].setAttribute('src', 'https://elzero.org/wp-content/themes/elzero/imgs/logo.png');
  allImages[i].setAttribute('alt', 'Elzero Logo');
}