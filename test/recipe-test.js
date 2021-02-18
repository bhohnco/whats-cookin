const chai = require('chai');
const expect = chai.expect;
const Recipe = require('../src/recipe.js');


describe('Recipe', () => {
  describe('Initilize Recipe', () => {
    let recipe;

    beforeEach(() => {
      recipe = new Recipe(595736, "https://spoonacular.com/recipeImages/595736-556x370.jpg", [
        {
          "id": 20081,
          "quantity": {
            "amount": 1.5,
            "unit": "c"
          }
        },
        {
          "id": 18372,
          "quantity": {
            "amount": 0.5,
            "unit": "tsp"
          }
        }], [
        {
          "instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
          "number": 1
        },
        {
          "instruction": "Add egg and vanilla and mix until combined.",
          "number": 2
        }], "Loaded Chocolate Chip Pudding Cookie Cups", [
        "antipasti",
        "starter",
        "snack",
        "appetizer",
        "antipasto",
        "hor d'oeuvre"
      ])
    });

    it('should be a function', () => {
      expect(Recipe).to.be.a('function');
    });

    it('should be an instance of Recipe', () => {
      expect(recipe).to.be.an.instanceOf(Recipe);
    });

    it('should initialize with an ID', () => {
      expect(recipe.id).to.eq(595736);
    });

    it('should initialize with an Image', () => {
      expect(recipe.image).to.eq("https://spoonacular.com/recipeImages/595736-556x370.jpg");
    });

    it('should initialize with an array of ingredients', () => {
      expect(recipe.ingredients).to.deep.eq([
        {
          "id": 20081,
          "quantity": {
            "amount": 1.5,
            "unit": "c"
          }
        },
        {
          "id": 18372,
          "quantity": {
            "amount": 0.5,
            "unit": "tsp"
          }
        }]);
    });

    it('should initialize with an array of instructions', () =>
      expect(recipe.instructions).to.deep.eq([
        {
          "instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
          "number": 1
        },
        {
          "instruction": "Add egg and vanilla and mix until combined.",
          "number": 2

        }]))



    it('should have a name', () => {
      expect(recipe.name).to.eq("Loaded Chocolate Chip Pudding Cookie Cups")
    });

    it('should initialize with an array of tags', () => {
      expect(recipe.tags).to.deep.equal([
        "antipasti",
        "starter",
        "snack",
        "appetizer",
        "antipasto",
        "hor d'oeuvre"
      ]);
    });
  });

  describe('Recipe methods', () => {
    let recipe;

    beforeEach( () => {
      recipe = new Recipe(595736, "https://spoonacular.com/recipeImages/595736-556x370.jpg", [
        {
          "id": 20081,
          "quantity": {
            "amount": 1.5,
            "unit": "c"
          }
        },
        {
          "id": 18372,
          "quantity": {
            "amount": 0.5,
            "unit": "tsp"
          }
        }], [
        {
          "instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
          "number": 1
        },
        {
          "instruction": "Add egg and vanilla and mix until combined.",
          "number": 2
        }], "Loaded Chocolate Chip Pudding Cookie Cups", [
        "antipasti",
        "starter",
        "snack",
        "appetizer",
        "antipasto",
        "hor d'oeuvre"
      ]);
    });

    it('should be able to add name to ingredients ID', () =>  {
      expect(recipe.generateIngredientNames(recipe)).to.deep.equal(['wheat flour', 'bicarbonate of soda']);
    });

    it('it should calculate the recipe cost', () =>  {
      expect(recipe.calculateRecipeCost()).to.equal(5.04)
    });

    it('it should return the recipe instructions', () =>  {
      expect(recipe.getInstructions()).to.deep.equal([
        "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
        "Add egg and vanilla and mix until combined."
      ])
    });

  });

});

