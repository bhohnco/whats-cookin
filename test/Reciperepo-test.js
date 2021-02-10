const chai = require('chai');
const expect = chai.expect;
const Recipe = require('../src/Recipe')

const testRecipeData = require('../data/recipes-test-data');


describe('Recipe Repo', function() {
  describe('Initilize Recipe Repo', function() {
    let recipe1;
    let recipe2;
    let recipe3;
    let recipe4;
    let recipeList;

    beforeEach(function() {
      recipe1 = new Recipe(testRecipeData[0]);
      recipe2 = new Recipe(testRecipeData[1]);
      recipe3 = new Recipe(testRecipeData[2]);
      recipe4 = new Recipe(testRecipeData[3]);
      recipeList = [recipe1, recipe2, recipe3, recipe4];


    it.skip('should be a function', function() {

      const recipeRepo = new Reciperepo();

      expect(recipeRepo).to.be.a('function');
    });


    it.skip('should be an instance of Recipe Repo', function() {

      const recipeRepo = new Reciperepo();

      expect(recipeRepo).to.be.an.instanceof(Reciperepo);
    });


    it.skip('should accept an array of recipes', function() {

      const recipeRepo = new Reciperepo(recipeList);

      expect(recipeRepo[0]).to.be.an.instanceof(Recipe);
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
      recipe1 = new Recipe(testRecipeData[0]);
      recipe2 = new Recipe(testRecipeData[1]);
      recipe3 = new Recipe(testRecipeData[2]);
      recipe4 = new Recipe(testRecipeData[3]);
      recipeList = [recipe1, recipe2, recipe3, recipe4];
      recipeRepo = new Reciperepo(recipeList);
      tag1 = 'starter'; //recipe1, recipe4
      tag2 = 'snack'; //recipe1
      tag3 = 'appetizer'; //recipe1
    });


    it.skip('should return a filtered list based on tags', function() {

      const tagArray = [tag1, tag2, tag3];

      const tagList = recipeRepo.returnTagList(tagArray); //array of recipes

      expect(tagList[0]).to.deep.equal(recipe1);
      expect([tagList[1]]).to.deep.equal(recipe4);

    });


    it.skip('should return a filtered list based on name', function() {

      const nameArray = ['loaded', 'grilled'];
      const nameList = recipeRepo.returnNameList(nameArray);

      expect(nameList[0]).to.deep.equal(recipe1);
      expect(nameList[1]).to.deep.equal(recipe2);
    });


    it.skip('should return a filtered list based on ingredients', function() {

      const nameArray = ['vanilla(1)', 'salt(1,4)', 'eggs(1,4)'];

      const nameList = recipeRepo[0].returnNameList(nameArray);

      expect(nameList[0]).to.deep.equal(recipe1);
      expect(nameList[1]).to.deep.equal(recipe4);

    });
  });


  });


});
