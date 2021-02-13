class Pantry {
  constructor(stockedIngredients) {
    this.userPantry = stockedIngredients;
    this.missingIngredients = [];
  }

  getPantryIngredients() {
    this.userPantry.map(ingredient => {
      const id = ingredient.ingredient;
      ingredientsData.map(ingredientData => {
        if (ingredientData.id === id) {
          ingredient.name =  ingredientData.name;
          ingredient.quantity.amount = ingredientData.amount;
        }
      })
    })
    return this.userPantry;
  }


//ingredients and *amounts* of ingredient**
//add return for ingredients needed**
//remove ingredients when a meal is cooked take in
// parameter of recipe and remove that list from pantry
}