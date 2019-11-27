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

// ------------------------------------------------------------------------------------------------------------
// array of search terms for 3 temperature sections
 const hotWeatherFoods = ["grilled","fresh","salad","pasta salad", "cold", "fruit", "garden","summer"];
 const medWeatherFoods = ["sandwhich","burger","pizza","breakfast","flatbread","snack"];
 const coldWeatherFoods = ["roasted", "baked", "soup", "stew","casserole","hot dish", "chili", "warm"]

	// if (currentTemp < 39) then search coldWeatherFoods + user search
	// if (40 < currentTemp < 69) then search medWeatherFoods + user search
	// if (currentTemp > 70) then search hotWeatherFoods + user search

// ------------------------------------------------------------------------------------------------------------


 axios.get("https://api.weatherbit.io/v2.0/subscription/usage?key=05658cc7a88941a9b5ad8ea87ffcaf89")
 .then(function(response){

    console.log(response)
 })
 
  const searchButton = document.getElementById("search-button")
  searchButton.addEventListener("click", function(){
	console.log("buttonclick")
});


 