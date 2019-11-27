function edamam() {

    const appId = "063ab359";
    const appKey = "87537f8acf10951583c43ab5434ae1d5";
    const userInput = "taco";
    const edamamURL = "https://api.edamam.com/search?q="+userInput+"&app_id="+appId+"&app_key="+appKey;
    


    axios.get(edamamURL).then(function(response){
        console.log(edamamURL);
        console.log(response);
    })
}
edamam();