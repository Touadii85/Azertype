// Déclaration des tableaux contenant les listes des mots proposés à l'utilisateur
const listeMots = ["Cachalot", "Pétunia", "Serviette"]
const listePhrases = ["Pas de panique !", "La vie, l'univers et le reste", "Merci pour le poisson"]

let score = 0

// Déclaration de la variable contenant le choix de l'utilisateur
let choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")
// Tant que l'utilisateur n'a pas saisi "mots" ou "phrases", on lui redemande de saisir un choix
while (choix !== "mots" && choix !== "phrases") {
    choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")
}

if (choix === "mots") {
    // On parcourt le tableau des mots
    for (let i = 0; i < listeMots.length; i++) {
        // On demande à l'utilisateur de saisir le mot correspondant à l'indice i
        let motUtilisateur = prompt("Entrez le mot : " + listeMots[i])
        if (motUtilisateur === listeMots[i]) {
            // Si le mot saisi par l'utilisateur est correct, on incrémente le score
            score++
        }
    }
    console.log("Votre score est de " + score + " sur " + listeMots.length)
} else {
    // On parcourt le tableau des phrases
    for (let i = 0; i < listePhrases.length; i++) {
        // On demande à l'utilisateur de saisir la phrase correspondant à l'indice i
        let phraseUtilisateur = prompt("Entrez la phrase : " + listePhrases[i])
        if (phraseUtilisateur === listePhrases[i]) {
            // Si la phrase saisi par l'utilisateur est correct, on incrémente le score
            score++
        }
    }
    console.log("Votre score est de " + score + " sur " + listePhrases.length)
}



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
