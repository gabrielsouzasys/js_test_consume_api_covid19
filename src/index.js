console.log('testes');
//let obj_response;  
function call_api(){
    
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://coronavirus-tracker-api.herokuapp.com/v2/locations", true);
    xhr.onload = function(){
        console.log(xhr.responseText);
       // transform_json (xhr.responseText);
    };
    
    document.getElementById('content').innerHTML = JSON.parse(xhr.send());
}


/* function transform_json (obj_response){
    var new_obj = {'pessoas' : []};
        
    debugger;
    obj_response = JSON.parse(obj_response);
    debugger;
    
    for (var i=0; i < obj_response.length; i++){
        debugger;
        new_obj.pessoas[i] = obj_response[i];
    }
    
    obj_response = JSON.stringify(new_obj);
} */