// Créez votre fonction ici
function calculate(a, b, operator){
    switch (operator) {
        case "+":
            return a + b
        case "-":
            return a - b
        case "*":
            return a * b
        case "/":
            if(b !== 0){
                return a / b
            }else{
                return "Erreur : division par zéro";
            }
        default:
            // Si l’opérateur ne correspond à aucun des cas précédents
            return "Opérateur invalide";                        
    
    }
}
// Exemples d'utilisation de la fonction
console.log(calculate(5, 3, '+'));   // Affiche 8
console.log(calculate(10, 4, '-'));  // Affiche 6
console.log(calculate(7, 2, '*'));   // Affiche 14
console.log(calculate(12, 3, '/'));  // Affiche 4
console.log(calculate(8, 0, '/'));   // Affiche "Division by zero is not allowed"
console.log(calculate(4, 5, '%'));   // Affiche "Invalid operator"

//export default calculate
