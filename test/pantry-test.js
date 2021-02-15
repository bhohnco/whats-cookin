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
  let recipe3;

  beforeEach(() => {
    user = new User(pantryTestData[0].id, pantryTestData[0].name, pantryTestData[0].pantry);
    pantry = new Pantry(pantryTestData[0].pantry);
    recipe1 = new Recipe(recipeTestData[0].id, recipeTestData[0].image, recipeTestData[0].ingredients, recipeTestData[0].instructions, recipeTestData[0].name, recipeTestData[0].tags)
    recipe2 = new Recipe(recipeTestData[1].id, recipeTestData[1].image, recipeTestData[1].ingredients, recipeTestData[1].instructions, recipeTestData[1].name, recipeTestData[1].tags)
    recipe3 = new Recipe(recipeTestData[2].id, recipeTestData[2].image, recipeTestData[2].ingredients, recipeTestData[2].instructions, recipeTestData[2].name, recipeTestData[2].tags)
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

  it('should return the stocked ingredients in users pantry', () => {
    expect(pantry.getPantryStock()).to.deep.equal(pantryTestData[0].pantry)
  });

  it('should find the required ingredients', () => {
    expect(pantry.getRequiredIngredients(recipe1)).to.deep.equal([{name: 'wheat flour', amount: 1.5},
      {name: 'bicarbonate of soda', amount: 0.5},
      {name: 'eggs', amount: 1},
      {name: 'sucrose', amount: 0.5},
      {name: 'instant vanilla pudding', amount: 3},
      {name: 'brown sugar', amount: 0.5},
      {name: 'salt', amount: 0.5},
      {name: 'fine sea salt', amount: 24},
      {name: 'semi sweet chips', amount: 2},
      {name: 'unsalted butter', amount: 0.5},
      {name: 'vanilla', amount: 0.5},
    ])
  })

  it('should check for required ingredients in Pantry', () => {
    const testTrue = pantry.checkPantryForRequiredIngedients(recipe3);
    expect(testTrue.canCook).to.equal(true);
  });

  it('should return false if there are not enough required ingredients', () => {
    const testFalse = pantry.checkPantryForRequiredIngedients(recipe2);
    expect(testFalse.canCook).to.equal(false);
    expect(testFalse.missingIngredients).to.deep.equal([
      {ingredient: 1009016, amount: 1.5},
      {ingredient: 9003, amount: 2},
      {ingredient: 20027, amount: 1},
      {ingredient: 1002046, amount: 1},
      {ingredient: 11215, amount: 1},
      {ingredient: 1012046, amount: 1},
      {ingredient: 19911, amount: 0.25},
      {ingredient: 16112, amount: 1},
      {ingredient: 10010062, amount: 24},
      {ingredient: 1102047, amount: 4},
      {ingredient: 16124, amount: 1},
      {ingredient: 1016168, amount: 1}
    ])
  });

  it('should be able to return array of missing ingredients', () => {
    const testArray = pantry.checkPantryForRequiredIngedients(recipe1);
    expect(testArray.missingIngredients).to.deep.equal([
      {ingredient: 20081, amount: 5},
      {ingredient: 18372, amount: 0.5},
      {ingredient: 1123, amount: 1},
      {ingredient: 19335, amount: 0.5},
      {ingredient: 19206, amount: 3},
      {ingredient: 19334, amount: 0.5},
      {ingredient: 2047, amount: 0.5},
      {ingredient: 1012047, amount: 24},
      {ingredient: 10019903, amount: 2},
      {ingredient: 1145, amount: 0.5},
      {ingredient: 2050, amount: 0.5}
    ])
  });

  it('should remove items from pantry when meal is cooked', () => {
    pantry.removeStockFromPantry(recipe3);
    expect(pantry.stockedIngredients).to.deep.equal([
      {
        "ingredient": 11477,
        "amount": 2
      },
      {
        "ingredient": 11297,
        "amount": 3.75
      },
      {
        "ingredient": 1082047,
        "amount": 9.75
      },
      {
        "ingredient": 20081,
        "amount": 4
      }])
  })
});