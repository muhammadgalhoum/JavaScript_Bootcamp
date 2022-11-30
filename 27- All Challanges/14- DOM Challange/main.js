document.body.style.cssText = "margin: 0px; background-color: rgb(236, 236, 236); font-family: Tahoma, Arial;";

// Start Header
let websiteHeader = document.createElement('header');
websiteHeader.className = 'website-head';
websiteHeader.style.cssText = "display: flex; justify-content: space-between; align-items: center;\
  background-color: #fff; padding: 5px";

// Start Logo
let websiteLogo = document.createElement('div');
websiteLogo.textContent = 'Elzero'
websiteLogo.className = 'logo';
websiteLogo.setAttribute('title', 'Website Logo');
websiteLogo.style.cssText = "font-weight: bold; font-size: 26px; color: rgb(35, 169, 110); margin-left: 10px;";

websiteHeader.appendChild(websiteLogo);
// End Logo

// Start Menu
let menu = document.createElement('ul');
menu.className = 'menu';
menu.style.cssText = "padding: 0; magin: 0; list-style: none; display: flex; justify-content: space-content;\
  align-items: center;";

websiteHeader.appendChild(menu);

for (let i = 0; i < 4; i++) {
  let li = document.createElement('li');
  li.style.cssText = "margin: 0 10px;";
  menu.appendChild(li)
}

menu.childNodes[0].textContent = 'Home';
menu.childNodes[1].textContent = 'About';
menu.childNodes[2].textContent = 'Service';
menu.childNodes[3].textContent = 'Contact';
// End Menu
document.body.appendChild(websiteHeader);
// Start Header

// Start Content
let content = document.createElement('div');
content.className = 'content';
content.style.cssText = "display: flex; flex-wrap: wrap; justify-content: center; gap: 20px;\
  padding: 20px; min-height: calc(100vh - 142px); box-sizing: border-box";

// Start Product
for (let i = 1; i <= 15; i++) { 
  let product = document.createElement('div');
  product.className = 'product';
  product.textContent = 'Product'
  product.style.cssText = "padding: 20px; color: rgb(136, 136, 136); background-color: #fff;\
    border: 1px solid rgb(221, 221, 221); border-radius: 6px; width: calc((100% - 40px) / 3);\
    text-align: center; box-sizing: border-box;";
  // Start Product Span
  for (let j = 0; j < 1; j++) {
    let productSpan = document.createElement('span');
    productSpan.textContent = `${i}`;
    productSpan.style.cssText = "font-size: 40px; color: black; font-weight: normal; display: block;\
    margin-top: 10px; margin-bottom: 10px";
    product.prepend(productSpan)
    // End Product Span
  }
  content.appendChild(product)
}
// End Product
document.body.appendChild(content);
// End Content

// Start Footer
let websiteFooter = document.createElement('footer');
websiteFooter.className = 'footer';
websiteFooter.textContent = 'Copyright 2022';
websiteFooter.style.cssText = "padding: 20px; font-size: 26px; text-align: center; color: #fff;\
background-color: rgb(35, 169, 110)";
document.body.appendChild(websiteFooter);
// End Footer