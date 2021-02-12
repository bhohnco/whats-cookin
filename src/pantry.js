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
        }
      })
    })
    return this.userPantry;
  }


}