// Global variables

const repo = recipeData.map(recipe => {
  const newRecipe = new Recipe(recipe.id, recipe.image, recipe.ingredients, recipe.instructions, recipe.name, recipe.tags);
  return newRecipe;
});
const allRecipes = new Reciperepo(repo);

const ingredientList = ingredientsData.map(ingredient => {
  const newIngredient = new Ingredient(ingredient);
  return newIngredient;
});

// const userData = usersData[getRandomIndex(usersData)];
// const currentUser = new User(userData.name, userData.id, userData.pantry);

// DOM ELEMENTS

const recipeList = document.querySelector('#recipeList');
const searchIcon = document.querySelector('#searchIcon');
const searchTab = document.querySelector('#searchTab')


// Event listeners
window.addEventListener('load', displayHomePage);
searchIcon.addEventListener('click', toggleSearchTab)

// FUNCTIONS

  function displayUserTab() {
    //reveals user tab under header and above current recipe recipe list
    // has buttons to that call updateRecipeList(user.toCook) or updateRecipeList(favorites)
  }

  function toggleSearchTab() {
    toggleClass(searchTab, 'hidden');
    toggleClass(searchIcon, 'user-icon-active')
  }

  function searchRecipes() {
    // reads data from search tab
    // runs allRecipes.returnTagList and/or allRecipes.returnNameList
    // or user search methods depending on form selection
  }

  function updateRecipeList(recipes) {
    recipes.forEach(recipe => {
      const tagList = cleanUpTagArr(recipe.tags);
      const cardText = `
      <div class="recipe-card-small">
        <img src=${recipe.image}>
        <h3>${recipe.name}</h3>
          <div class="small-card-bottom">
            <div class="small-card-bottom">
              <input class="fav-button-small" type="image" id="favoriteButton" alt="favorite button" src="./assets/heart_icon.png">
              <input class="to-cook-button-small" type="image" id="favoriteButton" alt="favorite button" src="./assets/cookpot1.png">
              <p class="tag-list-small">${tagList}</p>
            </div>
          </div>
      </div>`
      recipeList.innerHTML += cardText;
    })
  }

  function cleanUpTagArr(tagArray) {
    if (tagArray.length === 0) {
      return [' '];
    } else if (tagArray.length > 1) {
      let tagList = tagArray.shift();
      const returnString = tagArray.reduce((string, tag) => {
        string += `, ${tag}`;
        return string;
      }, tagList);
      return returnString;
     } else return tagArray[0];
  }

  function convertIdToName(id) {
    // return ingredient name based on id
  }

  function displayHomePage() {
    // hide user or search tabs

    updateRecipeList(allRecipes.recipeList);
  }

  function pageLoad() {
    displayHomePage();
  }

  function toggleHide(element) {
    return element.classList.toggle('hidden');
  }

  function toggleClass(element, className) {
    return element.classList.toggle(className);
  }

  function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }




// Logo home button
// User icon user page
// search bar (we could replace this with a search page that allows for advanced searching)
// user tab
// search tab
// recipeList
// Each recipe will need to be clickable, probably requires event bubbling
// Each tag should be clickable to allow for tag search
