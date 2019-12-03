function recipeFinder() {
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

	function weatherData() {
		const ingredientList = document.getElementById("IngredientList");
		
		const summerFoods = ["summer", "grilled","pasta salad", "salad","cold","fresh"];
		const springFoods = ["pizza", "sandwich", "breakfast", "brunch"];
		const winterFoods = ["soup", "stew","casserole","chili", "warm","hot dish","roasted","baked"];

		const searchButton = document.getElementById("search-button")
		searchButton.addEventListener("click", function () {
			console.log("buttonclick")

			event.preventDefault();

			const APIKey = "05658cc7a88941a9b5ad8ea87ffcaf89"

			const zipcodeInput = document.getElementById("user-location").value;
			console.log(zipcodeInput);

			const queryURL = "https://api.weatherbit.io/v2.0/current?&postal_code=" + zipcodeInput + "&country=US&units=imperial&key=" + APIKey


			axios.get(queryURL)
				.then(function (response) {

					// transfer content to HTML
					console.log(response)

					document.getElementById("currentTemperature").innerHTML = "Temperature (F): " + response.data.data[0].temp;

					document.getElementById("currentCity").innerHTML = "City: " + response.data.data[0].city_name;

					// Defining temperature as returned data
					const temperature = response.data.data[0].temp;
					console.log(temperature)

					// Define summer, spring, & winter temperature ranges based on returned data
					const summerTemp = (temperature >= 71);
					const springTemp = (temperature <= 70 && temperature >= 40);
					const winterTemp = (temperature <= 39);
					console.log("winterTemp:", winterTemp);
					console.log("springTemp:", springTemp);
					console.log("summerTemp:", summerTemp);

					// Define seasonal genres of food
					const summerFoods = ["summer", "grilled", "pasta salad", "salad", "cold", "fresh"];
					const springFoods = ["pizza", "sandwich", "breakfast", "brunch"];
					const winterFoods = ["soup", "stew", "casserole", "chili", "warm", "hot dish", "roasted", "baked"];
					let randomIndex = 0;
					// if summer temperature, 
					// then send summerFoods array

					if (summerTemp) {
						console.log(summerFoods)
						randomIndex = Math.floor(Math.random()*summerFoods.length);
						storeUserInput(summerFoods[randomIndex])
					};
					
					// if spring temperature,
					// then send springFoods array
					
					if (springTemp) {
						console.log(springFoods)
						randomIndex = Math.floor(Math.random()*springFoods.length);
						storeUserInput(springFoods[randomIndex])
					};
					
					// if winter temperature,
					// then send winterFoods array
					
					if (winterTemp) {
						console.log(winterFoods)
						randomIndex = Math.floor(Math.random()*winterFoods.length);
						console.log("Random keyword chosen: ", winterFoods[randomIndex])
						storeUserInput(winterFoods[randomIndex])
						
					};

				})

			});
		}
		weatherData();

		function storeUserInput(seasonalFoods){
			const mainIngredient = document.getElementById("user-search").value;
			const vegetarianEl = document.querySelector("#vegetarianCheckBox");
			const veganEl =  document.querySelector("#veganCheckBox");
			
			const userInput = {
				userIngredient: mainIngredient,
				dietaryRescritions: [],
				seasonalFoods: seasonalFoods
			};
			
			if(veganEl.checked) {
				// Checkbox is checked..
				userInput.dietaryRescritions.push("vegan")
			} else {
				// Checkbox is not checked..
			};
			
			if(vegetarianEl.checked) {
				// Checkbox is checked..
				userInput.dietaryRescritions.push("vegetarian")
			} else {
				// Checkbox is not checked..
			};
			console.log("User Inputs: ", userInput)

			getRecipes(userInput);
	}



	// Function will be used to call the food api and get reciepes based on user input
	// -- Get user's main ingredient
	// -- Get user's dietary restrictions
	// -- Get keywords from weather code to filter types of foods
	function getRecipes(userInput) {
		// Jake's api ID and Key
		const appId = "063ab359";
		const appKey = "87537f8acf10951583c43ab5434ae1d5";
		// Created to store users main ingredient
		// -- UserInput currently set to taco. In future updates the input will come from the html elements.
		const mainIngredient = userInput.userIngredient;
		// Created to store all dietary restrictions the user has selected
		// -- The food api categorizes these as health labels
		// -- Multiple health labels can be applied
		const dietaryRescritions = userInput.dietaryRescritions;
		// Created to store our custom parameters choosen based on the temperature at the zip code the user provided.
		const recipeKeywords = userInput.seasonalFoods;
		
		let query = mainIngredient+" "+recipeKeywords;

		// Creates URL for get request to the food API edamam
		// -- combines app id, app key, main ingredient, seasonal foods, and dietary
		let edamamURL = "https://api.edamam.com/search?q=" + query + "&app_id=" + appId + "&app_key=" + appKey;

		// If dietary rescritions were selected, adds them to the get request
		if (dietaryRescritions) {
			for (let i = 0; i < dietaryRescritions.length; i++) {
				edamamURL = edamamURL + "&health=" + dietaryRescritions[i];
			}
		}

		// Get request to food api
		axios.get(edamamURL).then(function(foodResponse){
			console.log(edamamURL);
			console.log(foodResponse);
			organizeRecipeData(foodResponse);

		})
		
	}

	// Function will be used to take the reponse from the food API and organize the data so it is usuable.
	// Will also display the recipe summaries in tiles.
	function organizeRecipeData(foodResponse){
		
		const recipes = foodResponse.data.hits;
		// Currently set to three for testing purposes. Eventually will be switched to 6. - JO
		const numRecipesToDisplay = 5;
		// console.log('unsorted recipes and sorted Recipes: ', unsortedRecipes, sortedRecipes);

		// For loop used to display recipe tiles.
		console.log("hello",recipes);

		for (let i = 0; i <= numRecipesToDisplay; i++) {
			// -- reference a single recipe in the variable sortedRecipes
			const singleRecipe = recipes[i].recipe;
			// -- store the values of the recipe title, servings, and prep time
			const recipeTitle = singleRecipe.label;
			const recipeServings = singleRecipe.yield || "Not Found";
			const prepAndCookTime = singleRecipe.totalTime || "Not Found";
			// created to create unique id names to reference ids in generated html
			const summaryTileEls = [];
			// creates the unique id every iternation of the loop
			const parentSummaryTileId = "parent" + i;
			summaryTileEls[i] = {
				title: "title" + i,
				servingsAndtime: "servingsAndtime" + i
			}
			// -- create the child tile using innerHTML
			// -- -- create unique ids for each element that will be used to display the title, servings, and prep time
			document.getElementById(parentSummaryTileId).innerHTML = `
		<article class="tile is-child box">
			<p id="title`+ i + `" class="title">Title Goes Here</p>
			<p id="servingsAndtime`+ i + `" class="subtitle` + (i + 1) + `">Servings and Total Time</p>
		</article>`;
			// Changes the innerText of the generated HTML to display the recipe title, servings, and prep time
			// -- updates the recipe summary tile title
			const titleElId = summaryTileEls[i].title;
			document.getElementById(titleElId).innerText = recipeTitle;
			// -- updates the recipe summmary tile servings and total time
			const servingsAndtimeElId = summaryTileEls[i].servingsAndtime;
			document.getElementById(servingsAndtimeElId).innerText = "Total Time: (" + prepAndCookTime + ") Servings: (" + recipeServings + ")";
			// -- continue loop until all 6 recipes are displayed
		}
		// return foodResponse;
		populateRecipe(foodResponse);
	}

	function populateRecipe(foodResponse){
	
		const recipeCards = document.querySelectorAll(".preview")
		// need to set class of SHOW for the container.
		
		for (let i = 0; i < recipeCards.length; i++){
			recipeCards[i].addEventListener("click", function(){
			// change inner text of ingredient list to data set foodObject
				console.log("click is working");
				const theIngredients = foodResponse.data.hits[i].recipe.ingredientLines
				document.getElementById("ingredientsList").innerText = foodResponse.data.hits[i].recipe.ingredientLines ;
				console.log(foodResponse.data.hits[i].recipe.ingredientLines);
				

				//put title of recipe in
				// const theRecipeTitle = foodResponse.data.hits[i].recipe.label;
				document.getElementById("recipeLabel").innerText = foodResponse.data.hits[i].recipe.label;
				console.log(foodResponse.data.hits[i].recipe.label);

				//put image in
				document.getElementById("recipeImage").setAttribute("src",foodResponse.data.hits[i].recipe.image)
				// <img id="recipeImage" src="` + foodResponse.data.hits[i].recipe.image + ` ></img>`
				console.log(foodResponse.data.hits[i].recipe.image);
				

				console.log("hello",i)
				//link to real recipe
			})
	
		}


	}
	populateRecipe ();

}
recipeFinder();
