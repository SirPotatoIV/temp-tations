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
document.getElementById("search-button").addEventListener("click", function(event){

	event.preventDefault();

	const APIKey = "05658cc7a88941a9b5ad8ea87ffcaf89"

	const zipcodeInput = document.getElementById("user-location").value;
	console.log(zipcodeInput);

	const queryURL = "https://api.weatherbit.io/v2.0/current?&postal_code=" + zipcodeInput + "&country=US&units=imperial&key=" + APIKey

	
		axios.get(queryURL)
			.then(function (response) {
				
				// transfer content to HTML
				document.getElementById("current-weather").innerHTML = JSON.stringify(response);
				console.log(response)

				document.getElementById("current-weather").innerHTML = "Temperature (F): " + response.data.data[0].temp;
				console.log(response.data.data[0].temp)
				document.getElementById("current-weather").innerHTML = "City: " + response.data.data[0].city_name;
				console.log(response.data.data[0].city_name)
			})





})




// const results = response
 //