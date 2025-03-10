/**
 * Fonction qui affiche le score final du joueur dans la console.
 * @param {number} score - Nombre de bonnes réponses.
 * @param {number} nbMotProposes - Nombre total de mots ou phrases proposés.
 */
function afficherResultat(score, nbMotProposes) {
    console.log('Votre score est de ' + score + '/' + nbMotProposes); // Affiche le score final dans la console
    return message; // ❌ Erreur ici : 'message' n'existe pas. Cette ligne ne sert à rien et peut être supprimée.
}

/**
 * Fonction qui demande à l'utilisateur de choisir entre jouer avec des mots ou des phrases.
 * Tant que l'utilisateur ne saisit pas "mots" ou "phrases", la question est reposée.
 * @returns {string} - Retourne le choix de l'utilisateur ("mots" ou "phrases").
 */
function choisirPhraseOuMots() {
    let choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?"); // Demande à l'utilisateur de choisir

    // Vérifie si l'utilisateur a entré une réponse valide (mots ou phrases), sinon on redemande
    while (choix !== "mots" && choix !== "phrases") {
        choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?");
    }

    return choix; // Retourne le choix pour l'utiliser dans la suite du programme
}

/**
 * Fonction qui lance une boucle demandant à l'utilisateur d'entrer les mots ou phrases affichés.
 * @param {Array} ListeProposes - Tableau contenant les mots ou phrases à proposer.
 * @returns {number} - Retourne le score final du joueur.
 */
function lancerBoucleDeJeu(ListeProposes) {
    let score = 0; // Initialisation du score à 0

    // Parcours de tous les éléments du tableau ListeProposes
    for (let i = 0; i < ListeProposes.length; i++) {
        let motUtilisateur = prompt("Entrez le mot : " + ListeProposes[i]); // Demande à l'utilisateur de saisir le mot ou la phrase affichée

        // Vérifie si l'utilisateur a bien tapé le mot ou la phrase sans erreur
        if (motUtilisateur === ListeProposes[i]) {
            score++; // Si c'est correct, on ajoute 1 au score
        }
    }

    return score; // Retourne le score final
}

/**
 * Fonction principale qui lance le jeu et affiche le score final.
 */
function lancerjeu() {
    let choix = choisirPhraseOuMots(); // Demande à l'utilisateur de choisir entre "mots" ou "phrases"
    let score = 0; // Initialisation du score
    let nbMotProposes = 0; // Initialisation du nombre de mots/phrases proposés

    // Vérifie le choix de l'utilisateur et appelle la bonne liste
    if (choix === 'mots') {
        score = lancerBoucleDeJeu(listeMots); // Joue avec la liste des mots et récupère le score
        nbMotProposes = listeMots.length; // Stocke le nombre total de mots
    } else {
        score = lancerBoucleDeJeu(listePhrases); // Joue avec la liste des phrases et récupère le score
        nbMotProposes = listePhrases.length; // Stocke le nombre total de phrases
    }

    afficherResultat(score, nbMotProposes); // Affiche le score final du joueur
}


