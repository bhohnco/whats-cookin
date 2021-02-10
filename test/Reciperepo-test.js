const chai = require('chai');
const expect = chai.expect;
const Recipe = require('../src/Recipe')
const Reciperepo = require('../src/Reciperepo')
const recipeData = require('../data/recipes-test-data');

describe('Recipe Repo', function() {
  describe('Initilize Recipe Repo', function() {
    let recipe1;
    let recipe2;
    let recipe3;
    let recipe4;
    let recipeList;

    beforeEach(function() {
      recipe1 = new Recipe(recipeData[0].id, recipeData[0].image, recipeData[0].ingredients, recipeData[0].instructions, recipeData[0].name, recipeData[0].tags);
      recipe2 = new Recipe(recipeData[1].id, recipeData[1].image, recipeData[1].ingredients, recipeData[1].instructions, recipeData[1].name, recipeData[1].tags);
      recipe3 = new Recipe(recipeData[2].id, recipeData[2].image, recipeData[2].ingredients, recipeData[2].instructions, recipeData[2].name, recipeData[2].tags);
      recipe4 = new Recipe(recipeData[3].id, recipeData[3].image, recipeData[3].ingredients, recipeData[3].instructions, recipeData[3].name, recipeData[3].tags);
      recipeList = [recipe1, recipe2, recipe3, recipe4];
    })

    it('should be an instance of Recipe Repo', function() {
      const recipeRepo = new Reciperepo();

      expect(recipeRepo).to.be.an.instanceof(Reciperepo);
    });

    it('should accept an array of recipes', function() {
      const recipeRepo = new Reciperepo(recipeList);
      expect(recipeRepo.recipeList[0]).to.be.an.instanceof(Recipe);
    });
  });

  describe('Recipe Repo methods', function() {
    let recipe1;
    let recipe2;
    let recipe3;
    let recipe4;
    let recipeList;
    let tag1;
    let tag2;
    let tag3;

    beforeEach(function() {
      recipe1 = new Recipe(recipeData[0].id, recipeData[0].image, recipeData[0].ingredients, recipeData[0].instructions, recipeData[0].name, recipeData[0].tags);
      recipe2 = new Recipe(recipeData[1].id, recipeData[1].image, recipeData[1].ingredients, recipeData[1].instructions, recipeData[1].name, recipeData[1].tags);
      recipe3 = new Recipe(recipeData[2].id, recipeData[2].image, recipeData[2].ingredients, recipeData[2].instructions, recipeData[2].name, recipeData[2].tags);
      recipe4 = new Recipe(recipeData[3].id, recipeData[3].image, recipeData[3].ingredients, recipeData[3].instructions, recipeData[3].name, recipeData[3].tags);
      recipeList = [recipe1, recipe2, recipe3, recipe4];
      recipeRepo = new Reciperepo(recipeList);
      tag1 = 'starter'; //recipe1, recipe4
      tag2 = 'snack'; //recipe1
      tag3 = 'appetizer'; //recipe1
    })

    it('should return a filtered list based on tags', function() {
      const tagArray = [tag1, tag2, tag3];

      const tagList = recipeRepo.returnTagList(tagArray); //array of recipes
      expect(tagList[0]).to.equal(recipe1);
      expect(tagList[1]).to.equal(recipe4);

    });

    it('should return a filtered list based on name', function() {
      const nameArray = ['loaded', 'grilled'];
      const nameList = recipeRepo.returnNameList(nameArray);

      expect(nameList[0]).to.deep.equal(recipe1);
      expect(nameList[1]).to.deep.equal(recipe2);
    });

    it.only('should return a filtered list based on ingredients', function() {
      const nameArray = ['vanilla', 'salt', 'eggs'];
      const nameList = recipeRepo.returnNameList(nameArray);

      expect(nameList[0]).to.deep.equal(recipe1);
      expect(nameList[1]).to.deep.equal(recipe4);

    });
  });


});
