function edamam() {

    const appId = "063ab359";
    const appKey = "87537f8acf10951583c43ab5434ae1d5";
    const userInput = "taco";
    const edamamURL = "https://api.edamam.com/search?q="+userInput+"&app_id="+appId+"&app_key="+appKey;
    const searchButtonEl= document.getElementById("search-button");
    
   
    
    


    searchButtonEl.addEventListener("click", function (){
        console.log("click")

     
    
    });

    axios.get(edamamURL).then(function(response){
        console.log(edamamURL);
        console.log(response);
    })
}
edamam();

// got this from w3schools and Stack Overflow

const glutenFree = document.querySelector("gluten-freeCheckBox");   
glutenFree.addEventListener( 'change', function() {
    if(this.checked) {
        // Checkbox is checked..
    } else {
        // Checkbox is not checked..
    }
});

const dairyFree = document.querySelector("dairy-freeCheckBox");
dairyFree.addEventListener( 'change', function() {
    if(this.checked) {
        // Checkbox is checked..
    } else {
        // Checkbox is not checked..
    }
});

const vegan =  document.querySelector("veganCheckBox");
vegan.addEventListener( 'change', function() {
    if(this.checked) {
        // Checkbox is checked..
    } else {
        // Checkbox is not checked..
    }
});


const vegetarian = document.querySelector("vegetarianCheckBox");
vegetarian.addEventListener( 'change', function() {
    if(this.checked) {
        // Checkbox is checked..
    } else {
        // Checkbox is not checked..
    }
});