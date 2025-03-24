//votre code ici
// Déclaration de la fonction pairNumbers avec deux paramètres : min et max
function pairNumbers(min, max) {
  
    // On initialise une variable vide pour stocker les nombres pairs sous forme de chaîne
    let result = "";
  
    // Boucle qui parcourt tous les nombres entre min et max inclus
    for (let i = min; i <= max; i++) {
  
      // Vérifie si le nombre actuel est pair (reste de la division par 2 = 0)
      if (i % 2 === 0) {
  
        // Si la chaîne n'est pas vide, on ajoute une virgule avant d’ajouter un nouveau nombre
        if (result.length > 0) {
          result += ",";
        }
  
        // On ajoute le nombre pair à la chaîne
        result += i;
      }
    }
  
    // Une fois la boucle terminée, on retourne la chaîne contenant les nombres pairs
    return result;
  }
  
  // Affiche le résultat de la fonction dans la console avec les valeurs 1 à 10
  console.log(pairNumbers(1, 10)); // Résultat attendu : 2,4,6,8,10
  
//export default pairNumbers
