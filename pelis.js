const fs = require('fs');
const listaRaw = fs.readFileSync(__dirname + "/pelis.json");

// sacado del discord
const listaString = listaRaw.toString();
const lista = JSON.parse(listaString)

const getAll = function () {
  // retorna todas las pelis (collection)
  var arrayDePelis = lista;

  return arrayDePelis
  
};


const noFormat = function(array){
    // Recibe collection y lo retorna sin formato
    const parsed = JSON.stringify(array);

    const string = parsed.toString();
    
    return string
};

const searchBy = function (texto, arrayDePelis) {
  // Busca dentro del "arrayDePelis" el "texto" indicado 
  // y lo incluye en un nuevo array
  var resultado = arrayDePelis.filter((x) => {
    
    var titleLowered = x.title.toLowerCase();
    const textoLowered = texto.toLowerCase();


    return titleLowered.includes(textoLowered);
  });

  return resultado
  
};


const sortBy = function (propiedad, arrayDePelis) {
  // ordena el arrayDePelis según la propiedad pasada
  // NO CREA UN ARRAY NUEVO, modifica el existente.


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
  // Recibe un arrayDePelis y los filtra por la propiedad
  // retorna otro array con los valores que correspondan

  const propiedadLowered = propiedad.toLowerCase(); 

  var filtrado = arrayDePelis.filter((x) => {

    return x.tags.includes(propiedadLowered);
  });

  return filtrado

};



exports.searchByCriteria = function (criterios) {
 
  let tmp = getAll();

  if (criterios.search){ 
    tmp = searchBy(criterios.search, tmp);
  } else {
    // console.log("no hay search");
  };

  if (criterios.sort){
    tmp = sortBy(criterios.sort, tmp);
  } else {
    // console.log("no hay sort");
  };
  
  if (criterios.tag){ 
    tmp = sortByTag(criterios.tag, tmp);
  } else {
    // console.log("no hay tags")
  };


  if (criterios.noParameter){
    return lista
  };

  if (criterios.noFormat){
    return noFormat(tmp)
  };
  
  // Si se ejecuta "noParameter" devuelve undefined,
  // ya que "tmp" guarda un console.table() de la lista
  return tmp;
};