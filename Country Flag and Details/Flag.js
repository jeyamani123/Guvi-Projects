fetch("https://restcountries.eu/rest/v2/all")
.then((resp)=>resp.json())
.then((out)=>{
    //console.log(out); //To display all arrays
    
    let divid=document.getElementById("card"); //Getting id of parent div
    for(var i=1;i<21;i++){
        var div=document.createElement('div'); //Creating div for every iteration
    	divid.appendChild(div);                //Appending div to hml
    	//console.log(div);
    	var img=document.createElement("img"); //Creating img for every iteration
    	div.appendChild(img);                  //Append after creation
    	img.setAttribute("alt","Image");       //Set attribute for the appended img tag 
    	var id="img"+i;
    	img.setAttribute("id",id)
    	var image=out[i]["flag"];
        document.getElementById(id).setAttribute("src",image);
        //creating button 
        let btn="button"+"("+i+")";
        img.setAttribute("onclick",btn);        //To set onclick attribute for image tag
        
        console.log(out[i]);
    }

})
.catch((error)=>console.log(error));

