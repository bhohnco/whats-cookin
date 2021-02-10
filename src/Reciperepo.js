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
          const recipeTerms = recipeNames.concat(recipe.generateIngredientNames());
          if (recipeTerms.includes(term) && !returnList.includes(recipe)) {
            returnList.push(recipe);
          }
        });
      });
      return returnList;
    };
};

module.exports = Reciperepo;
