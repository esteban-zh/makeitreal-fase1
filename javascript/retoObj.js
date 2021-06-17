var recipe = {
    "leche en polvo": "1 litro",
    "chocolate en barra": "3 barras",
    "azúcar": "30 gramos",
}


// for ( var key in recipe){
//     console.log("agrega " + recipe[key] +" de "+ key)
// }

recipe.mixIngredients = function() {
    return "mezclando los ingredientes..."
}

console.log(recipe.mixIngredients());

