class Reciperepo {
    constructor(recipeList) {
      this.recipeList = recipeList;
    }

    returnTagList(tags) {
      let returnList = [];
      tags.forEach(tag => {
        this.recipeList.forEach(recipe => {
          if (recipe.tags.includes(tag)) {
            returnList.push(recipe);
          }
        });
      });
      return returnList;
    };

    returnNameList(searchTerms) {
      let returnList = [];
      searchTerms.forEach(term => {
        this.recipeList.forEach(recipe => {
          const lowerCaseName = recipe.name.toLowerCase();
          let recipeNames = lowerCaseName.split(' ');
          const unformattedIngNames = recipe.generateIngredientNames();
          const ingredientNames = unformattedIngNames.map(ingredient => {
            const slice = (ingredient.indexOf('-') + 2);
            return ingredient.slice(slice);
          });
          const recipeTerms = recipeNames.concat(ingredientNames);
          if (recipeTerms.includes(term) && !returnList.includes(recipe)) {
            returnList.push(recipe);
          }
        });
      });
      return returnList;
    };
};

if (typeof module !== 'undefined') {
  module.exports = Reciperepo;
}
