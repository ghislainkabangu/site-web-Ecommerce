/** @format */
// CODE DE GESTION DU MENU
let sidenav = document.getElementsByClassName("sidenav")[0];
let openBtn = document.getElementById("openBtn");
let closeBtn = document.getElementById("closeBtn");

openBtn.addEventListener("click", () => {
  sidenav.style = "left: -0px";
});

closeBtn.addEventListener("click", () => {
  sidenav.style = "left: -40%";
});

//CODE DE GESTION DES INTERACTIONS DES ARTICLES

let article = document.querySelectorAll("article"); // c'est tableau contenant les articles
for (let i = 0; i < article.length; i++) {
  // on parcourt le tableau
  article[i].addEventListener("mouseover", () => {
    /* au passage de souris sur un article [y]on attribue cet artcle une nouvelle class contenant des nouvelles propriétes CSS */
    article[i].classList.add("article");

    article[i].title = "Vous êtes prêts à acheter cet article ";
  });

  article[i].addEventListener("mouseout", () => {
    /*lorsque la souris sort de l'article[y] on supprime qui lui avait été attribué*/
    article[i].classList.remove("article");
  });
}

/****************************************diaporama contenat les témoignages des clients********************/

let masterChild = document.querySelectorAll(".masterChild");
let blockUn = document.querySelector(".un");

let input = document.querySelectorAll("input");
input[0].addEventListener("click", () => {
  masterChild[0].classList.add("masterChildDisplayBlock");
  masterChild[1].classList.remove("masterChildDisplayBlock");
  masterChild[2].classList.remove("masterChildDisplayBlock");
  blockUn.classList.remove("displayNone");
});

input[1].addEventListener("click", () => {
  masterChild[0].classList.remove("masterChildDisplayBlock");
  masterChild[1].classList.add("masterChildDisplayBlock");
  masterChild[2].classList.remove("masterChildDisplayBlock");
  blockUn.classList.add("displayNone");
});

input[2].addEventListener("click", () => {
  masterChild[0].classList.remove("masterChildDisplayBlock");
  masterChild[1].classList.remove("masterChildDisplayBlock");
  masterChild[2].classList.add("masterChildDisplayBlock");
  blockUn.classList.add("displayNone");
});

// BARRE DE PROGRESSION

let progressbar = document.querySelectorAll(".progressionbar");
for (let x = 0; x < progressbar.length; x++) {
  progressbar[x].addEventListener("mouseover", () => {
    progressbar[x].classList.add("progressbarInjs");
  });

  progressbar[x].addEventListener("mouseout", () => {
    progressbar[x].classList.remove("progressbarInjs");
  });
}
