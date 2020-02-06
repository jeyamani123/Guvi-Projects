fetch("https://restcountries.eu/rest/v2/all")
.then((resp)=>resp.json())
.then((out)=>{
    //console.log(out); //To display all arrays
    
    var image=out[0]["flag"];
    //document.write(image);
    document.getElementById("img1").setAttribute("src",image);
    
    var image=out[1]["flag"];
    document.getElementById("img2").setAttribute("src",image);

    var image=out[2]["flag"];
    document.getElementById("img3").setAttribute("src",image);

    var image=out[3]["flag"];
    document.getElementById("img4").setAttribute("src",image);

    var image=out[4]["flag"];
    document.getElementById("img5").setAttribute("src",image);

    var image=out[5]["flag"];
    document.getElementById("img6").setAttribute("src",image);

    var image=out[6]["flag"];
    document.getElementById("img7").setAttribute("src",image);

    var image=out[7]["flag"];
    document.getElementById("img8").setAttribute("src",image);

    var image=out[8]["flag"];
    document.getElementById("img9").setAttribute("src",image);

    var image=out[9]["flag"];
    document.getElementById("img10").setAttribute("src",image);

    var image=out[10]["flag"];
    document.getElementById("img11").setAttribute("src",image);

    var image=out[11]["flag"];
    document.getElementById("img12").setAttribute("src",image);

    var image=out[12]["flag"];
    document.getElementById("img13").setAttribute("src",image);

    var image=out[13]["flag"];
    document.getElementById("img14").setAttribute("src",image);

    var image=out[14]["flag"];
    document.getElementById("img15").setAttribute("src",image);

    var image=out[15]["flag"];
    document.getElementById("img16").setAttribute("src",image);

    var image=out[16]["flag"];
    document.getElementById("img17").setAttribute("src",image);

    var image=out[17]["flag"];
    document.getElementById("img18").setAttribute("src",image);

    var image=out[18]["flag"];
    document.getElementById("img19").setAttribute("src",image);

    var image=out[19]["flag"];
    document.getElementById("img20").setAttribute("src",image);

    var image=out[20]["flag"];
    document.getElementById("img21").setAttribute("src",image);

    
    /*To print first 20 objects in JSON 
    for(var i=0;i<21;i++){
        console.log(out[i]);
    }
    */

})
.catch((error)=>console.log(error));

