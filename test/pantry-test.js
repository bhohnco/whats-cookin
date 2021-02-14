const chai = require('chai');
const expect = chai.expect;

const Pantry = require('../src/pantry.js');
const User = require('../src/user.js');
const Recipe = require('../src/recipe.js');
const recipeTestData = require('../data/recipes-test-data.js')
const pantryTestData = require('../data/Pantry-test-data.js')

describe('Pantry', () => {
  let user;
  let pantry;
  let recipe1;
  let recipe2;

  beforeEach(() => {
    user = new User(pantryTestData[0].id, pantryTestData[0].name, pantryTestData[0].pantry);
    pantry = new Pantry(pantryTestData[0].pantry);
    recipe1 = new Recipe(recipeTestData[0].id, recipeTestData[0].image, recipeTestData[0].ingredients, recipeTestData[0].instructions, recipeTestData[0].name, recipeTestData[0].tags)
    recipe2 = new Recipe(recipeTestData[1].id, recipeTestData[1].image, recipeTestData[1].ingredients, recipeTestData[1].instructions, recipeTestData[1].name, recipeTestData[1].tags)
    recipe3 = new Recipe()
  });

  it('should be a function', () => {
    expect(Pantry).to.be.a('function');
  });

  it('should be an instance of Pantry', () => {
    expect(pantry).to.be.instanceOf(Pantry);
  });

  it('should have stocked ingredients', () => {
    expect(pantry.stockedIngredients).to.deep.equal(pantryTestData[0].pantry)
  });

  it('should find the required ingredients', () => {
    expect(pantry.getRequiredIngredients(recipe1)).to.deep.equal([{ name: 'wheat flour', amount: 1.5 },
        { name: 'bicarbonate of soda', amount: 0.5 },
        { name: 'eggs', amount: 1 },
        { name: 'sucrose', amount: 0.5 },
        { name: 'instant vanilla pudding', amount: 3 },
        { name: 'brown sugar', amount: 0.5 },
        { name: 'salt', amount: 0.5 },
        { name: 'fine sea salt', amount: 24 },
        { name: 'semi sweet chips', amount: 2 },
        { name: 'unsalted butter', amount: 0.5 },
        { name: 'vanilla', amount: 0.5 },
    ])
  })

  it('should check for required ingredients in Pantry', () => {
    expect(pantry.checkPantryForRequiredIngedients(recipe1)).to.equal(true)
  });

  it('should return false if there are not enough required ingredients', () => {
     expect(pantry.checkPantryForRequiredIngedients(recipe2)).to.equal(false)
  });

  it('should be able to return array of missing ingredients', () => {
      expect(pantry.provideMissingIngredients(recipe1)).to.deep.equal([])
  })
})