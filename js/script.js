/** @format */

let prix = document.querySelectorAll("h5");

let article = document.querySelectorAll("article");
for (let i = 0; i < article.length; i++) {
  article[i].addEventListener("mouseover", () => {
    article[i].classList.add("article");
     
    article[i].title="Article Vente"
    
  });

  article[i].addEventListener("mouseout", () => {
    article[i].classList.remove("article");
  });
}

