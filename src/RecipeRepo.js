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
      searchTerms.foreach(term => {
        this.recipeList.forEach(recipe => {
          if (recipe.tags.includes(term)) {
            returnList.push(recipe);
          }
        });
      });
      return returnList;
    });
}

module.exports = Reciperepo;
