class Pantry {
  constructor(stockedIngredients) {
    this.stockedIngredients = stockedIngredients;
  }

  getRequiredIngredients(recipe) {
    return recipe.ingredients.map(ingredient => {
      const ingredientList = {};
      const id = ingredient.id;
      const amount = ingredient.quantity.amount;
      ingredientsData.forEach(ingredientData => {
        const name = ingredientData.name;
        if (ingredientData.id === id) {
          ingredientList.name = name;
          ingredientList.amount = amount;
        }
      })
      return ingredientList;
    })
  }

  checkPantryForRequiredIngedients(recipe) {
    let requiredIngredient = recipe.ingredients
    let ingredientsAvailable;
    requiredIngredient.forEach(ingredient => {
       this.stockedIngredients.forEach(item => {
         console.log(requiredIngredient);
         console.log(this.stockedIngredients)
        if (ingredient.id === item.id && item.amount >= ingredient.quantity.amount) {
          ingredientsAvailable = true;
        } else {
          ingredientsAvailable = false;
        }
        console.log(ingredientsAvailable)
      })
      // return ingredientsAvailable;
    })
  }

  provideMissingIngredients(recipe) {
    let requiredIngredient = this.getRequiredIngredients(recipe);
    let missingIngredients = [];
    requiredIngredient.forEach(ingredient => {
      this.stockedIngredients.forEach(stockedItem => {
        if ((ingredient.id === stockedItem.ingredient) && (ingredient.amount > stockedItem.amount)) {
          missingIngredients.push(`Ingredient: ${requiredIngredient.name} Amount: ${ingredient.amount - stockedItem.amount} `)
        }
      })
    })
    return missingIngredients;
  }

  removeStockFromPantry() {

  }
}




//ingredients and *amounts* of ingredient**
//add return for ingredients needed**
//remove ingredients when a meal is cooked take in
// parameter of recipe and remove that list from pantry


if (typeof module !== 'undefined') {
  module.exports = Pantry;
}
