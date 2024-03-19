/** @format */
// CODE DE GESTION DU MENU
let sidenav = document.getElementsByClassName("sidenav")[0];
let openBtn = document.getElementById("openBtn");
let closeBtn = document.getElementById("closeBtn");

openBtn.addEventListener("click", () => {
  sidenav.style = "left: -0px";
});

closeBtn.addEventListener("click", () => {
  sidenav.style = "left: -100%";
});
