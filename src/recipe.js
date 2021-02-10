/* eslint-disable indent */
let ingredientsData = require('../data/ingredients.js')

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
            ingredientsData.forEach(ingredientData => {
                if (ingredientData.id === id) {
                    ingredientNameList.push(ingredientData.name);
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
                    totalCost += (ingredient.estimatedCostInCents * listIngredient.quantity.amount) / 100
                }
            });
        });
        return totalCost;
    }

    getInstructions() {
         let detailList = [];
         console.log(typeof(this.instructions))
        this.instructions.forEach(instruction => {
            detailList.push(instruction.instruction)
         });
         return detailList;
    }
}


if (typeof module !== 'undefined') {
    module.exports = Recipe;
}
