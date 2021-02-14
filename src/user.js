let ingredientsData = require('../data/ingredients.js')

class User {
  constructor(userData) {
    this.name = userData.name;
    this.id = userData.id;
    this.pantry = userData.pantry;
    this.favoriteRecipes = [];
    this.recipesToCook = [];
  }

  addToFavorites(recipe) {
    this.favoriteRecipes.push(recipe);
  }

  removeFavoriteRecipe(recipe) {
    let index = this.favoriteRecipes.indexOf(recipe);
    this.favoriteRecipes.splice(index, 1)
  }

  addToRecipesToCook(recipe) {
    this.recipesToCook.push(recipe)
  }

  removeRecipeToCook(recipe) {
    let index = this.recipesToCook.indexOf(recipe);
    this.recipesToCook.splice(index, 1)
  }

  filterFavoriteRecipesByTag(tag, recipeList) {
    return recipeList.filter(recipe => {
      return recipe.tags.includes(tag);
    })
  }

  filterFavoriteRecipesByName(searchName, recipeList) {
    let foundRecipes = [];
    recipeList.filter(recipe => {
      let recipeName = recipe.name;
      if (recipeName.includes(searchName)) {
        foundRecipes.push(recipe)
      }
    })
    return foundRecipes;
  }

  filterFavoriteRecipesByIngredient(searchIngredient, recipeList) {
    let returnRecipes = [];
    let ingredientName;
    let ingredientID;
    ingredientsData.forEach(ingredient => {
      if (searchIngredient === ingredient.name) {
        ingredientID = ingredient.id;
        ingredientName = ingredient.name;
      }
    })
    recipeList.forEach(recipe => {
      recipe.ingredients.forEach(ingredient => {
        if (ingredientID === ingredient.id) {
          returnRecipes.push(recipe)
        }
      })
    });
    return returnRecipes;
  }

}

if (typeof module !== 'undefined') {
  module.exports = User;
}

