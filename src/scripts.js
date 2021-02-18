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
const homeButton = document.querySelector('#headerLogo');
const recipeList = document.querySelector('#recipeList');
const singleRecipe = document.querySelector('#singleRecipe')
const searchIcon = document.querySelector('#searchIcon');
const searchTab = document.querySelector('#searchTab');
const searchButton = document.querySelector('#searchButton');
const searchBar = document.querySelector('#searchBar');
const userIcon = document.querySelector('#userIcon');
const userTab = document.querySelector('#userTab');
const userFilter = document.querySelector('#filterList');
const userGreeting = document.querySelector("#userGreeting");
const headsUp = document.querySelector('#headsUp');
const favoriteButton = document.querySelector('#favoriteIcon');
const toCookButton = document.querySelector('#toCookButton');

// Event listeners
window.addEventListener('load', displayHomePage);
searchIcon.addEventListener('click', toggleSearchTab);
searchButton.addEventListener('click', searchRecipes);
userIcon.addEventListener('click', toggleUserTab);
homeButton.addEventListener('click', displayHomePage);
userFilter.addEventListener('click', function(event) {
  console.log(event.target.id);
  userRecipeFilter(event.target.id);
});
recipeList.addEventListener('click', function(event) {
  let id = 0;
  let recipe = 0;
  if (event.target.parentNode.id) {
    id = event.target.parentNode.id;
    recipe = allRecipes.recipeList.find(recipe => recipe.id === parseInt(id));
    displaySingleRecipe(recipe);
  } else if (event.target.parentNode.parentNode.id) {
    id = event.target.parentNode.parentNode.id;
    recipe = allRecipes.recipeList.find(recipe => recipe.id === parseInt(id));
    displaySingleRecipe(recipe);
  } else {
    id = event.target.parentNode.parentNode.parentNode.id;
    const button = event.target.id;
    saveRecipe(id, button);
  }
});

function userRecipeFilter(id) {
  if (id === 'all') {
    updateRecipeList(allRecipes.recipeList);
  } else if (id === 'fav') {
    updateHeadsUp('My favorites');
    updateRecipeList(currentUser.favoriteRecipes);
  } else {
    updateHeadsUp('My recipes to cook');
    updateRecipeList(currentUser.recipesToCook);
  }
}

function saveRecipe(id, button) {
  const recipe = allRecipes.recipeList.find(recipe => recipe.id === parseInt(id));
  if (button === 'toCookButton' && currentUser.recipesToCook.includes(recipe)) {
    currentUser.removeRecipeToCook(recipe)
  } else if  (button === 'toCookButton') {
    currentUser.addToRecipesToCook(recipe)
  } if (button === 'favoriteButton' && currentUser.favoriteRecipes.includes(recipe)) {
    currentUser.removeFavoriteRecipe(recipe)
  } else if (button === 'favoriteButton') {
    currentUser.addToFavorites(recipe)
  }
}

  function toggleUserTab() {
    userGreeting.innerText = `Hello ${currentUser.name}.`;
    hide(searchTab);
    removeClass(searchIcon, 'search-icon-active')
    toggleClass(userTab, 'hidden');
    toggleClass(userIcon, 'user-icon-active')
  }

  function toggleSearchTab() {
    hide(userTab);
    removeClass(userIcon, 'user-icon-active')
    toggleClass(searchTab, 'hidden');
    toggleClass(searchIcon, 'search-icon-active')
  }

  function searchRecipes() {
    const searchInput = searchBar.value; //take input from form
    const rawTerms = searchInput.split(','); //seprate by comma
    const searchTerms = rawTerms.map(term => term.trim()); //remove any whitespace
    const searchList = document.querySelector(`input[type="radio"]:checked`);
    let tagResults = [];
    let nameResults = [];

    if (searchList.value === 'all') {
      tagResults = allRecipes.returnTagList(searchTerms) || [];
      nameResults = allRecipes.returnNameList(searchTerms) || [];
    } else if (searchList.value === 'fav') { //search through favotites
      //assign tag and name to the values of the user methods
      //filterFavoriteRecipesByTag
      //
    } else { //search through recipes to cook
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
      updateHeadsUp(`Sorry, there were no results for ${termsToDisplay}`)
    }
    updateRecipeList(recipes);
    searchBar.value = '';
    }

function updateHeadsUp(message) {
  unhide(headsUp);
  headsUp.innerHTML = `<h2>${message}</h2>`
}

  function updateRecipeList(recipes) {
    recipeList.innerHTML = '';
    recipes.forEach(recipe => {
      const tagList = cleanUpTagArr(recipe.tags);
      const cardText = `
      <div id="${recipe.id}" class="recipe-card-small hover">
        <img class="card-image" src=${recipe.image} alt=${recipe.name}>
        <h3>${recipe.name}</h3>
        <div class="small-card-bottom">
          <div class="button-box">
            <input class="fav-button-small" type="image" id="favoriteButton" alt="favorite button" src="./assets/heart_icon.png">
            <input class="to-cook-button-small" type="image" id="toCookButton" alt="favorite button" src="./assets/cookpot1.png">
          </div>
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
  } else {
    return tagArray[0];
  }
}

function displayHomePage() {
    hide(userTab);
    removeClass(userIcon, 'user-icon-active')
    hide(searchTab);
    hide(headsUp);
    hide(singleRecipe);
    unhide(recipeList);
    removeClass(searchIcon, 'user-icon-active')
    updateRecipeList(allRecipes.recipeList);
  }


function pageLoad() {
  displayHomePage();
}

function displaySingleRecipe(recipe) {
  hide(recipeList);
  hide(searchTab);
  unhide(singleRecipe);
  removeClass(searchIcon, 'user-icon-active');
  singleRecipe.innerHTML = '';
  singleRecipe.scrollTo(0, 0);
  const tagList = cleanUpTagArr(recipe.tags);
  const recipeCost = recipe.calculateRecipeCost()
  const recipeIngredients = formatIngredientList(recipe.generateIngredientNames());
  const recipeDirections = formatDirections(recipe.getInstructions());
  const cardText = `
    <div class="single-recipe-card-small">
      <h3>${recipe.name}</h3>
      <img class="single-recipe-img" src=${recipe.image} alt=${recipe.name}>
         <p class="cost-display">Cost for recipe ingredients: $${recipeCost}</p>
         <div class="small-card-bottom">
           <div class="button-box">
             <input class="fav-button-small" type="image" id="favoriteButton" alt="favorite button" src="./assets/heart_icon.png">
             <input class="to-cook-button-small" type="image" id="favoriteButton" alt="favorite button" src="./assets/cookpot1.png">
           </div>
           <p class="tag-list-small">${tagList}</p>
         </div>
      <section class="ingredients-section">
        <h3>Ingredients</h3>
        <ul class="single-recipe-lists">
          ${recipeIngredients}
        </ul>
      </section>
      <section class="directions-section">
        <h3>Directions</h3>
        <ol class="single-recipe-lists">
          ${recipeDirections}
        </ol>
      </section>
    </div>`
    singleRecipe.innerHTML += cardText;
  }

 function formatIngredientList(ingredients) {
   let formattedList = '';
   ingredients.forEach(ingredient => {
     formattedList += `<li>${ingredient}</li>`;
   });
   return formattedList;
 };

 function formatDirections(directions) {
   let formattedList = '';
   directions.forEach(direction => {
     formattedList += `<li>${direction}</li>`
   });
   return formattedList;
};

  function toggleHide(element) {
    return element.classList.toggle('hidden');
  }

  function hide(element) {
    return element.classList.add('hidden');
  }

  function unhide(element) {
    return element.classList.remove('hidden');
  }

  function toggleClass(element, className) {
    return element.classList.toggle(className);
  }

  function removeClass(element, className) {
    return element.classList.remove(className)
  }

  function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }
