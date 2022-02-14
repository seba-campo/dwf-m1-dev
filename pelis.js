const lista = require("./pelis.json");

// No Format - DONE 
exports.noFormat = function(){
    const stringify = JSON.stringify(lista);
    const print = console.log(stringify);
    
    return print;
}

exports.noParameter = function(){
    const table = console.table(lista);

    return table;
}

// TO DO




exports.test = function(a){
    const retorno = a + " que tal.";
    return retorno;
};

// Sort
exports.ordenar = function(arg){
    
    if(arg == "rating" || arg == "Rating"){
        const rating = lista["rating"];
 
        for (let i = 0; i < lista.length; i++) {
            i.rating.sort(function(a,b){
                if(a<b){ 
                    return -1
                }
                if(a>b){
                    return 1
                }
                if(a==b){
                    return 0
                }
            })
            return lista  
        }
        
    }

};

// Find
exports.buscar = function(parameter){

    
    
    const pelicula = lista.find((x) => { 
        const index = x.title.indexOf([parameter]);
        const value = lista[index];

        return value
        
    });

    return pelicula

};
