
class Recipe {
  constructor(id, image, ingredients, instructions, name, tags) {
    this.id = id;
    this.image = image;
    this.ingredients = ingredients;
    this.instructions = instructions;
    this.name = name;
    this.tags = tags;
  }

  generateIngredientNames() {
    let ingredientNameList = [];
    this.ingredients.forEach(ingredient => {
      const id = ingredient.id;
      const amount = ingredient.quantity.amount
      const units = ingredient.quantity.unit
      ingredientsData.find(ingredientData => {
        if (ingredientData.id === id) {
          ingredientNameList.push(`${amount} ${units} - ${ingredientData.name}`);
        }
      })
    })
    return ingredientNameList;
  }

  calculateRecipeCost() {
    let totalCost = 0;
    this.ingredients.forEach(listIngredient => {
      ingredientsData.forEach(ingredient => {
        if (listIngredient.id === ingredient.id) {
          totalCost += Math.round(ingredient.estimatedCostInCents * listIngredient.quantity.amount)
        }
      });
    });
    return totalCost/100;
  }

  getInstructions() {
    let detailList = [];
    this.instructions.forEach(instruction => {
      const step = instruction.number
      detailList.push(`Step:${instruction.number}-${instruction.instruction} `)
    });
    return detailList;
  }
}

if (typeof module !== 'undefined') {
  module.exports = Recipe;
}
