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

const currentUser = new User(usersData[getRandomIndex(usersData)]);

// DOM ELEMENTS

const homeButton = document.querySelector('#headerLogo');
const recipeList = document.querySelector('#recipeList');
const singleRecipe = document.querySelector('#singleRecipe')
const searchIcon = document.querySelector('#searchIcon');
const searchTab = document.querySelector('#searchTab');
const searchButton = document.querySelector('#searchButton');
const searchBar = document.querySelector('#searchBar');
const headsUp = document.querySelector('#headsUp');


// Event listeners
window.addEventListener('load', displayHomePage);
searchIcon.addEventListener('click', toggleSearchTab);
searchButton.addEventListener('click', searchRecipes);
homeButton.addEventListener('click', displayHomePage);

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
    const searchInput = searchBar.value; //take input from form
    const rawTerms = searchInput.split(','); //seprate by comma
    const searchTerms = rawTerms.map(term => term.trim()); //remove any whitespace
    const searchList = document.querySelector(`input[type="radio"]:checked`);

    if (searchList.value === 'all') {
      var tagResults = allRecipes.returnTagList(searchTerms) || [];
      var nameResults = allRecipes.returnNameList(searchTerms) || [];
    } else if (searchList.value === 'fav') {
      //assign tag and name to the values of the user methods
    } else {
      // assign tag and name to the values of the use methods
    }

    const mergeResults = tagResults.concat(nameResults);
    const searchResults = mergeResults.filter((result, index) => {
      return mergeResults.indexOf(result) === index;
    });

    displaySearchResults(searchTerms, searchResults);
  }

  function displaySearchResults(terms, recipes) {
    const termsToDisplay = terms.map(term => {
      return " '"+`${term}`+"'";
    });
    toggleSearchTab();
    unhide(headsUp);
    if (recipes.length > 0) {
      updateHeadsUp(`Search results for ${termsToDisplay}`);
    } else {
      updateHeadsUp(`Sorry, there were results for ${termsToDisplay}`)
    }
    updateRecipeList(recipes);
    searchBar.value = '';
  }

  function updateHeadsUp(message) {
    headsUp.innerHTML = `<h2>${message}</h2>`
  }

function updateRecipeList(recipes) {
  recipeList.innerHTML = '';
  recipes.forEach(recipe => {
    const tagList = cleanUpTagArr(recipe.tags);
    const cardText = `
      <div id="${recipe.id}" class="recipe-card-small">

        <img src=${recipe.image}>
        <h3>${recipe.name}</h3>
          <div class="small-card-bottom">
            <input class="fav-button-small" type="image" id="favoriteButton" alt="favorite button" src="./assets/heart_icon.png">
            <input class="to-cook-button-small" type="image" id="favoriteButton" alt="favorite button" src="./assets/cookpot1.png">
            <p class="tag-list-small">${tagList}</p>
          </div>
      </div>`
    recipeList.innerHTML += cardText;
  })
}

  function cleanUpTagArr(tagArray) {
    if (tagArray.length === 0) {
      return [' '];
    } else if (tagArray.length > 1) {
        const returnString = tagArray.map(tag => ` ${tag}`);
      return returnString;
     } else return tagArray[0];
  }

  function convertIdToName(id) {
    // return ingredient name based on id
  }

  function displayHomePage() {

    hide(searchTab);
    hide(headsUp);

    updateRecipeList(allRecipes.recipeList);
  }

  function pageLoad() {
    displayHomePage();
  }


displaySingleRecipe(allRecipes.recipeList[37])
console.log(allRecipes.recipeList[35])
function displaySingleRecipe(recipe) {
    // const tagList = cleanUpTagArr(recipe.tags);
    const recipeCost = recipe.calculateRecipeCost()
    const recipeIngredients = recipe.generateIngredientNames()
    const recipeDirections = recipe.getInstructions()

    const cardText = `
      <div class="single-recipe-card-small">
        <img src=${recipe.image}>
        <h3>${recipe.name}</h3>
           <p>Cost for recipe ingredients:</p> <span>$${recipeCost}</span>
        <div class="small-card-bottom">
          <div class ="card-buttons">
            <input class="fav-button-small" type="image" id="favoriteButton" alt="favorite button" src="./assets/heart_icon.png">
            <input class="to-cook-button-small" type="image" id="favoriteButton" alt="favorite button" src="./assets/cookpot1.png">
          </div>
          <p class="tag-list-small"></p>
        </div>
        <section class="ingredients-section">
          <h3 id>Ingredients</h3>
          <ul>
            <li>${recipeIngredients}</li>
          </ul>         
        </section>
        <section class="directions-section">
          <h3>Directions</h3>
          <ul>
            <ol>${recipeDirections}</ol>
          </ul>
        </section>
      </div>`
    singleRecipe.innerHTML += cardText;
}

  function toggleHide(element) {
    return element.classList.toggle('hidden');

  function hide(element) {
    return element.classList.add('hidden');
  }

  function unhide(element) {
    return element.classList.remove('hidden');

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
