/** @format */

let listClient = [];

let form = document.querySelector("form");

form.addEventListener("submit", (envoie) => {
  envoie.preventDefault();
  let nom = document.getElementById("nom").value;
  let postnom = document.getElementById("postnom").value;
  let prenom = document.getElementById("prenom").value;
  let sexe;
  let inputradio = document.querySelectorAll("input");
  for (let i = 0; i < inputradio.length; i++) {
    if (inputradio[i].type === "radio" && inputradio[i].checked) {
      sexe = inputradio[i].value;
    }
  }
  let numTelephone = document.getElementById("tel").value;
  let courier = document.getElementById("mail").value;

  let communeClient;
  let commune = document.getElementById("commune");
  communeClient = commune.options[commune.selectedIndex].value;

  let quatier = document.getElementById("quartier").value;
  let rue = document.getElementById("rue").value;

  let choixAticle;
  let article = document.getElementById("article");
  choixAticle = article.options[article.selectedIndex].value;
  let nombreArticle = document.getElementById("nombre").value;

  let infoClient = {
    nom,
    postnom,
    prenom,
    sexe,
    numTelephone,
    courier,
    communeClient,
    quatier,
    rue,
    choixAticle,
    nombreArticle,
  };
  listClient.push(infoClient);
  console.log(listClient);
});
