// Étape 1 : Récupère le bouton
const button = document.getElementById('myButton')

// Étape 2 : Crée un paragraphe pour le message
const messagePera = document.createElement('p')

// Étape 3 : Ajoute ce paragraphe au body (sous le bouton)
document.body.appendChild(messagePera)

// Étape 4 : Ajoute l’événement au clic du bouton
button.addEventListener('click', function (){
    messagePera.textContent = "Bonjour vous avez cliqué sur le button !"
})