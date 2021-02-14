// Global variables

const protoRecipes = new Array(recipeData.length);
const recipes = protoRecipes.fill(0);
const repo = recipes.map((recipe, i) => {
  const newRecipe = new Recipe(recipeData[i].id, recipeData[i].image, recipeData[i].ingredients, recipeData[i].instructions, recipeData[i].name, recipeData[i].tags);
  return newRecipe;
});
const allRecipes = new Reciperepo(repo);
// const userData = usersData[getRandomIndex(usersData)];
// const currentUser = new User(userData.name, userData.id, userData.pantry);

// Event listeners
window.addEventListener('load', displayHomePage);

// FUNCTIONS

  function displayUserTab() {
    //reveals user tab under header and above current recipe recipe list
    // has buttons to that call updateRecipeList(user.toCook) or updateRecipeList(favorites)
  }

  function displaySearchTab() {
    //reveals search page under the header and above the current recipe list
    //list of all tags with check boxes
    //form box for typing in search terms
    // Radio buttons for all recipes, favorites list, tocook list
    // search button
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
            <input class="fav-button-small" type="image" id="favoriteButton" alt="favorite button" src="./assets/heart_icon.png">
            <input class="to-cook-button-small" type="image" id="favoriteButton" alt="favorite button" src="./assets/cookpot1.png">
            <p class="tag-list-small">${tagList}</p>
          </div>
      </div>`
      recipeList.innerHTML += cardText;
    })
  }


    // const recipeCards = list.recipeList.map(recipe => {
    //   const tagList = cleanUpTagArr(recipe.tags);
    //   const cardText = `
    //   <div class="recipe-card-small">
    //     <img src=${recipe.image}>
    //     <h3>${recipe.name}</h3>
    //       <div class="small-card-bottom">
    //         <input class="fav-button-small" type="image" id="favoriteButton" alt="favorite button" src="./assets/heart_icon.png">
    //         <input class="to-cook-button-small" type="image" id="favoriteButton" alt="favorite button" src="./assets/cookpot1.png">
    //         <p class="tag-list-small">${tagList}</p>
    //       </div>
    //   </div>
    //   `
    //   console.log(cardText);
    //   return cardText;
    // })
    // // console.log(recipeCards);
    // recipeCards.forEach(card => {
    //   console.log(card);
    //   recipeList.innerHTML += card;
    // })

  function cleanUpTagArr(tagArray) {
    if (tagArray.length > 1) {
      let tagList = tagArray.shift();
      const returnString = tagArray.reduce((string, tag) => {
        string += `, ${tag}`;
        return string;
      }, tagList);
      return returnString;
     }
     else return tagArray[0];
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

  function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }


// DOM ELEMENTS

const recipeList = document.querySelector('#recipeList');

// Logo home button
// User icon user page
// search bar (we could replace this with a search page that allows for advanced searching)
// user tab
// search tab
// recipeList
// Each recipe will need to be clickable, probably requires event bubbling
// Each tag should be clickable to allow for tag search
