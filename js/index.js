/** @format */

let listClient = [];

let form = document.querySelector("form");

form.addEventListener("submit", (envoie) => {
  envoie.preventDefault();
  let nom = document.getElementById("nom").value;
  let postnom = document.getElementById("postnom").value;
  let prenom = document.getElementById("prenom").value;
 
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
  let messageClient=document.querySelector("textarea").value

  let infoClient = {
    nom,
    postnom,
    prenom,
    numTelephone,
    courier,
    communeClient,
    quatier,
    rue,
    choixAticle,
    nombreArticle,
    messageClient
  };
  listClient.push(infoClient);
  console.log(listClient);
});
