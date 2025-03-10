// Ecrivez votre code en dessous de ces commentaires.
// Pensez à ouvrir l'onglet console pour consulter le résultat !
/*
totalLivre = 50
totalLivre -=10
totalLivre +=5
console.log(totalLivre)

let affichageTotalLivres = "Notre bibliothèque possède "
affichageTotalLivres += totalLivre
affichageTotalLivres += " Livres."
console.log(affichageTotalLivres)

let ticket = {
    nomFilm: "batman",
    prix: 5,
    numeroSalle: 8
}
console.log(ticket)

let nom = "ilies"

console.log(nom)

let message = "Bonjour "+ nom + ", votre film " + ticket.nomFilm + " est en salle " + ticket.numeroSalle + "."
console.log(message)
*/
let playlist = ["omega", "spiider-man", "disk war"]
let totalMorceaux = playlist.length

console.log(playlist)
console.log(totalMorceaux)

playlist.push('immundo')
playlist.push('columbo')
totalMorceaux = playlist.length

console.log(playlist)
console.log(totalMorceaux)

playlist.pop()

totalMorceaux = playlist.length

console.log(playlist)
console.log(totalMorceaux)

let mot = prompt('écrivez OK')

while(mot !== 'OK'){
    mot = prompt('écrivez OK')
}

console.log('tu a écrit OK')