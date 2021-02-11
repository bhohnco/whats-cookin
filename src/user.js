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
}

if (typeof module !== 'undefined') {
  module.exports = User;
}