// Pseudo Code TempTations
// HTML Set up
	// Install both APIs, CSS Framework (Bulma), and LowDash
// JS, CSS File, Asset folder set up
// CSS adjust layout, colors, fonts
// JAVASCRIPT:
	// Aquire the user’s local temperature/location - geolocation? User input?
	// Set search term parameters based on three temperature ranges
	// Accept the user input for the main ingredient.
// Accept the user input for dietary restrictions.
	// Call the API, make a request to return temperature parameter
    //
    
  

 // Function 
 // user ingredient input

 axios.get("https://api.weatherbit.io/v2.0/subscription/usage?key=05658cc7a88941a9b5ad8ea87ffcaf89")
 .then(function(response){

    console.log(response)
 })
 
  const searchButton = document.getElementById("search-button")
  searchButton.addEventListener("click", function(){
	console.log("buttonclick")
});


// Function will be used to call the food api and get reciepes based on user input
// -- Get user's main ingredient
// -- Get user's dietary restrictions
// -- Get keywords from weather code to filter types of foods
function getRecipes() {
	
	// Jake's api ID and Key
    const appId = "063ab359";
    const appKey = "87537f8acf10951583c43ab5434ae1d5";
	// Created to store users main ingredient
	// -- UserInput currently set to taco. In future updates the input will come from the html elements.
	const mainIngredient = "taco";
	// Created to store all dietary restrictions the user has selected
	const dietaryRescritions = [];
	// Created to store the keywords choosen by us based on the temperature at the zip code the user provided.
	const recipekeywords = [];
	// Creates URL for get request to the food API edamam
	// -- combines app id, app key, main ingredient, dietary, and keywords  
	const edamamURL = "https://api.edamam.com/search?q="+mainIngredient+"&app_id="+appId+"&app_key="+appKey;
	
	// Get request to food api
    axios.get(edamamURL).then(function(response){
        // console.log(edamamURL);
		// console.log(response);
		
    })
}
// Currently the function gets called once the page is loaded, but in future updates the function will be called once the user clicks search
getRecipes();

// Function will be used to take the reponse from the food API and organize the data so it is usuable
function organizeReceipeData(){

}



 