function abc(){
    console.log("where is the cat");
    fetch("https://api.thecatapi.com/v1/images/search")
        .then(res => res.json() )
        .then(data => {
            console.log(data)
            document.querySelector('img').src = data[0].url
        }) 
        
}

