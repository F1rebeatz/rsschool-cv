const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const overlay = document.querySelector("#overlay");
const menu = document.querySelector("#menu").cloneNode(1);
const mobMenu = document.querySelector("#mobMenu").cloneNode(1);

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
  e.preventDefault();
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  overlay.classList.toggle("show");
  mobMenu.classList.toggle("act");
  renderPopup();
}

function renderPopup() {
  popup.appendChild(menu);
  menu.appendChild(mobMenu);
}

const links = Array.from(menu.children);

links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  overlay.classList.remove("show");
  mobMenu.classList.remove("act");
}

const image = document.createElement("img");
