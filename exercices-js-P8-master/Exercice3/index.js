// Créez votre fonction ici
function calculateAverage(numbers) {
    // Vérifie si numbers est bien un tableau et qu'il n'est pas vide
    if (!Array.isArray(numbers) || numbers.length === 0) {
      return "No numbers to calculate average";
    }
  
    // Calcule la somme des éléments du tableau
    let sum = numbers.reduce((total, current) => total + current, 0);
  
    // Retourne la moyenne
    return sum / numbers.length;
  }
  
// Exemples d'utilisation de la fonction
console.log(calculateAverage([5, 10, 15])) // retourne 10
console.log(calculateAverage([10, 20, 30, 20])) // retourne 20
console.log(calculateAverage()) // No numbers to calculate average

//export default calculateAverage
