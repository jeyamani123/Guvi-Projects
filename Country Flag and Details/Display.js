function button(num){
fetch("https://restcountries.eu/rest/v2/all")
.then((resp)=>resp.json())
.then((out)=>{
    
        document.write("Name:"+out[num]["name"]+"<br />");
        document.write("Alpha 2 Code:"+out[num]["alpha2Code"]+"<br />");
        document.write("Capital:"+out[num]["capital"]+"<br />");
        document.write("Region:"+out[num]["region"]+"<br />");
        document.write("Borders:"+out[num]["borders"]+"<br />");
        
    }
)
.catch((error)=>console.log(error));
}
