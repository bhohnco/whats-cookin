let ingredientsData = require('../data/ingredients.js')
class Pantry {
  constructor(stockedIngredients) {
    this.stockedIngredients = stockedIngredients;
  }

  getPantryStock() {
    return this.stockedIngredients;
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
    let ingredientsAvailable = {
      canCook : true,
      missingIngredients : []
    };
    requiredIngredient.forEach(ingredient => {
      let matchingPantryItem = this.stockedIngredients.reduce((stock, pantryItem) => {
        const idMatch = this.stockedIngredients.find(pantryItem => pantryItem.ingredient === ingredient.id)
        if (idMatch === undefined) {
          ingredientsAvailable.canCook = false;
          return {"ingredient": ingredient.id, "amount": ingredient.quantity.amount}
        } else if (idMatch.amount < ingredient.quantity.amount) {
          ingredientsAvailable.canCook = false;
          return {"ingredient": ingredient.id, "amount": (ingredient.quantity.amount - idMatch.amount)}
        } else {
          return idMatch;
        }
      }, []);
      ingredientsAvailable.missingIngredients.push(matchingPantryItem)
    });
    return ingredientsAvailable;
  }
    
  removeStockFromPantry(recipe) {
    this.stockedIngredients.forEach(item => {
      recipe.ingredients.forEach((ingredient => {
        if (item.ingredient === ingredient.id) {
          item.amount -= ingredient.quantity.amount
        }
      }))
    });
    this.stockedIngredients = this.stockedIngredients.filter((item) => {
      return item.amount > 0;
    })
  }
}

if (typeof module !== 'undefined') {
  module.exports = Pantry;
}