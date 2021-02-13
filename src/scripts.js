
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

  function updateRecipeList(list) {
    // accepts an array of recipes
    // builds markup recipe card for each item in the list parameter
    // injects markup into index
  }

  function displayHomePage() {
    // hides user or search tabs
    // updateRecipeList(allRecipes);
  }

  function pageLoad() {
    // initalize const currentUser with getRandomUser();
    // initlize const allRecipes = new Reciperepo(all of the recipe data)
    // displayHomePage();
  }

  function getRandomUser() {
    // create an instance of user from a random data
  }


// DOM ELEMENTS

// Logo home button
// User icon user page
// search bar (we could replace this with a search page that allows for advanced searching)
// Each recipe will need to be clickable, probably requires event bubbling
// Each tag should be clickable to allow for tag search
