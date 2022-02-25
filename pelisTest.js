const lista = require("./pelis")


const getAll = function () {
  // retorna todas las pelis (collection)
  // acá hay que leer el archivo y parsearlo 
  var arrayDePelis = lista;

  return arrayDePelis
  
};


const noFormat = function(){
    const parsed = JSON.stringify(lista);
    return parsed
};

const searchBy = function (texto, arrayDePelis) {

  var resultado = arrayDePelis.filter((x) => {
    return x == texto
  });

  return resultado
  
};


const sortBy = function (propiedad, arrayDePelis) {

  var arrayOrdenado = arrayDePelis.sort((a,b) =>{
    
    if(a[propiedad] < b[propiedad]){
      return -1
    }
    if(a[propiedad] > b[propiedad]){
      return 1
    }else{
      return 0
    }
     
  });

  return arrayOrdenado

};

const sortByTag = function (propiedad, arrayDePelis) {
  
  const propiedadLowered = propiedad.toLowerCase(); 


  var filtrado = arrayDePelis.filter((x) => {

    return x.tags.includes(propiedadLowered);
  });

  return filtrado

};



exports.searchByCriteria = function (criterios) {
  // comienzo un array vacio que voy a empezar a rellenar con las respuestas de las funciones
  let tmp = getAll();

  // console.log(listaLowered);

  // console.log(tmp);
  // console.log(criterios);

  if (criterios.noParameter){
    tmp = console.table(lista);
  };

  if (criterios.noFormat){
    console.log(noFormat());
  }else{
      // console.log("no hay 'noFormat'");
  };


  if (criterios.search){ 
    console.log("hay search y es", criterios.search);
    tmp = searchBy(criterios.search, tmp);
  } else {
    console.log("no hay search");
  };

  if (criterios.sort){
    tmp = sortBy(criterios.sort, tmp);
  } else {
    console.log("no hay sort");
  };
  
  if (criterios.tag){ 
    tmp = sortByTag(criterios.tag, tmp);
  } else {
    console.log("no hay tags")
  };


  return tmp;
};