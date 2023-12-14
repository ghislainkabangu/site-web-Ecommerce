/** @format */

let formulaire = document.querySelector("form");
formulaire.addEventListener("submit", () => {
  let prenom = document.getElementById("prenom").value;

  alert(
    "merci " +
      prenom +
      " votre commande a été bien reҫue , \n nous sommes fiers de vous compter parmis nos clients .\n  Notre équipe vous contactera dans les prochaines heures"
  );
});
