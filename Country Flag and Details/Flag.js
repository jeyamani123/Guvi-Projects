fetch("https://restcountries.eu/rest/v2/all")
.then((resp)=>resp.json())
.then((out)=>{
    //console.log(out); //To display all arrays
    
    for(var i=0;i<21;i++){
        var image=out[i]["flag"];
        document.getElementById("img${i}").setAttribute("src",image);

        console.log(out[i]);
    }

})
.catch((error)=>console.log(error));

