function createPopup() {
  let container = document.createElement("div");
  container.style.cssText = "position: relative; background-color: #ececec; width:500px; height:140px;\
    font-family: Arial, Helvetica, sans-serif; z-index: 1000000; float: right; margin: 30px";
  
  let title = document.createElement("h2");
  title.textContent = 'Welcome';
  title.style.cssText = "display: flex; place-content: center; padding: 40px 15px 20px; margin: 0";

  let content = document.createElement("p");
  content.textContent = 'Welcome To Elzero Web School'
  content.style.cssText = "display: flex; place-content: center; margin: 0 auto";

  let btn = document.createElement("buttton");
  btn.textContent = 'x';
  btn.style.cssText = "position: absolute; right: -12px; top: 0; transform: translateY(-50%);\
    color: #fff; background-color: red; font-weight: bold; padding: 5px 10px;\
    border-radius: 50%; box-sizing: border-box; cursor: pointer";
  
  btn.onclick = function () {
    let parent = document.getElementsByTagName("div")[0];
    parent.style.display = 'none';
  }

  container.appendChild(title);
  container.appendChild(content);
  container.appendChild(btn);
  document.body.appendChild(container);
}
window.onload = setTimeout(() => {
  createPopup()
}, 5000);