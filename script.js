const listeMots = ['Cachalot', 'Pétunia', 'Serviette']

const listePhrase = ['Pas de panique !', 'La vie, l’univers et le reste', 'Merci pour le poisson']

let score = 0

let demandeUtilisateur = prompt("mot où phrase choisissez")

if(demandeUtilisateur === "mot"){
    for(let i = 0; i < listeMots.length; i++){
        let motUtilisateur = prompt('Entrez le mot : ' + listeMots[i])
        if (motUtilisateur === listeMots[i]) {
            score++
        }
    }
}

if (demandeUtilisateur === "phrase") {
    for(let i = 0; i < listePhrase.length; i++){
        let motUtilisateur = prompt('Entrez la phrase : ' + listePhrase[i])
        if (motUtilisateur === listePhrase[i]) {
            score++
        }
    }
} 




// Affichage du score de l'utilisateur
console.log("Votre score est de " + score + " sur 3")



/*
console.log("Hello World");

let motTapeOk = true // Essayez de mettre false à la place de true

if (motTapeOk) {
    console.log("Bravo, vous avez correctement tapé le mot")
} else {
    console.log("Échec, le mot n'est pas correct")
}

let painNoix = true
let MaMonnaie = 8
let prix = 6

if(painNoix === true && MaMonnaie>=prix){
    console.log("j\'achète du pain au noix")
}else{
    console.log("j\'achète une baguette")
}


let listeMots = ["Cachalot", "Pétunia", "Serviette"]
let score = 0

let motUtilisateur = prompt("Entrer le mot "+listeMots[0])

if(listeMots[0] === motUtilisateur){
    score ++
}

motUtilisateur = prompt("Entrer le mot "+listeMots[1])

if(listeMots[1] === motUtilisateur){
    score ++
}

motUtilisateur = prompt("Entrer le mot "+listeMots[2])

if(listeMots[2] === motUtilisateur){
    score ++
}

console.log(score)*/
