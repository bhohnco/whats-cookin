const chai = require('chai');
const expect = chai.expect;

const User = require ('../src/user.js');
const Recipe = require ('../src/recipe.js')

describe('User', () => {
  let userData = {}
  let recipe; 
  let recipe2;
    
  beforeEach( () => {
    userData = {
      "name": "Matt",
      "id": 363,
      "pantry": ["rice", "sugar", "salt"],
      "favoriteRecipe": [],
      "recipesToCook": []
    };
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
      
    recipe2 = new Recipe (678353, "https://spoonacular.com/recipeImages/678353-556x370.jpg", [{
      "id": 1009016,
      "quantity": {
        "amount": 1.5,
        "unit": "cups"
      }
    },
    {
      "id": 9003,
      "quantity": {
        "amount": 2,
        "unit": ""
      }
    }], [
      {
        "instruction": "Season the pork chops with salt and pepper and grill or pan fry over medium high heat until cooked, about 3-5 minutes per side. (If grilling, baste the chops in the maple dijon apple cider sauce as you grill.)Meanwhile, mix the remaining ingredients except the apple slices, bring to a simmer and cook until the sauce thickens, about 2-5 minutes.Grill or saute the apple slices until just tender but still crisp.Toss the pork chops and apple slices in the maple dijon apple cider sauce and enjoy!",
        "number": 1
      }], "Maple Dijon Apple Cider Grilled Pork Chops", [
      "lunch",
      "main course",
      "main dish",
      "dinner"
    ]);
  });

  it('should be an instance of User', () => {
    const user = new User(userData)
    expect(user).to.be.an.instanceOf(User);
  });

  it('should contain a name', () => {
    const user = new User(userData)
    expect(user.name).to.equal('Matt');
  });

  it('should contain an id', () => {
    const user = new User(userData)
    expect(user.id).to.equal(363);
  });

  it('should contain a pantry', () => {
    const user = new User(userData)
    expect(user.pantry).to.deep.equal(["rice", "sugar", "salt"]);
  });

  it('should contain no recipes to start', () => {
    const user = new User(userData)
    expect(user.favoriteRecipes).to.deep.equal([]);
  })

  it('should contain no recipes to cook to start', () => {
    const user = new User(userData)
    expect(user.recipesToCook).to.deep.equal([]);
  })

  it('should be able to add a recipe to favorites', () => {
    const user = new User(userData)
    user.addToFavorites('Maple Dijon Apple Cider Grilled Pork Chops')
    user.addToFavorites('Loaded Chocolate Chip Pudding Cookie Cups')
    expect(user.favoriteRecipes).to.deep.equal(['Maple Dijon Apple Cider Grilled Pork Chops', 'Loaded Chocolate Chip Pudding Cookie Cups']);
  });

  it('should be able to remove recipe from favorites', () => {
    const user = new User(userData)
    user.addToFavorites('Maple Dijon Apple Cider Grilled Pork Chops')
    user.addToFavorites('Loaded Chocolate Chip Pudding Cookie Cups')
    user.addToFavorites('Oatmeal bake')
    user.removeFavoriteRecipe('Loaded Chocolate Chip Pudding Cookie Cups')
    expect(user.favoriteRecipes).to.deep.equal(['Maple Dijon Apple Cider Grilled Pork Chops', 'Oatmeal bake']);
  });

  it('should be able to add a recipe to cook', () => {
    const user = new User(userData)
    user.addToRecipesToCook('Maple Dijon Apple Cider Grilled Pork Chops')
    user.addToRecipesToCook('Loaded Chocolate Chip Pudding Cookie Cups')
    expect(user.recipesToCook).to.deep.equal(['Maple Dijon Apple Cider Grilled Pork Chops', 'Loaded Chocolate Chip Pudding Cookie Cups']);
  });

  it('should be able to remove recipe from recipes to cook', () => {
    const user = new User(userData)
    user.addToRecipesToCook('Maple Dijon Apple Cider Grilled Pork Chops')
    user.addToRecipesToCook('Loaded Chocolate Chip Pudding Cookie Cups')
    user.addToRecipesToCook('Oatmeal bake')
    user.removeRecipeToCook('Maple Dijon Apple Cider Grilled Pork Chops')
    expect(user.recipesToCook).to.deep.equal(['Loaded Chocolate Chip Pudding Cookie Cups', 'Oatmeal bake']);
  });

  it('should be able to filter recipes by tags', () => {
    const user = new User(userData)
    user.addToFavorites(recipe);
    user.addToFavorites(recipe2);
    expect(user.filterFavoriteRecipesByTag('snack', user.favoriteRecipes)).to.deep.equal([recipe])
  });

  it('should be able to filter recipes by name', () => {
    const user = new User(userData);
    user.addToFavorites(recipe);
    user.addToFavorites(recipe2);
    expect(user.filterFavoriteRecipesByName('Maple Dijon Apple Cider Grilled Pork Chops', user.favoriteRecipes)).to.deep.equal([recipe2])
  })

  it('should be able to filter recipes by ingredient', () => {
    const user = new User(userData);
    user.addToFavorites(recipe);
    user.addToFavorites(recipe2);
    expect(user.filterFavoriteRecipesByIngredient("wheat flour", user.favoriteRecipes)).to.deep.equal([recipe])
  })
});
