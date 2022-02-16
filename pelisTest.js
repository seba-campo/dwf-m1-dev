const getAll = function () {
    // retorna todas las pelis (collection)
    // acá hay que leer el archivo y parsearlo 
  };
  
  const searchBy = function (texto, arrayDePelis) {
    // recibe un array de pelis y las filtra por texto
    // acá hay que usar el método filter de array 
  };
  const sortBy = function (propiedad, arrayDePelis) {
    // recibe un array de pelis y las ordena por propiedad
    // acá se ordena usando el método sort usando el parámetro "propiedad"
    // tiene que poder ordenar el array contemplando que me pueden pasar cualquier cosa en 
    // el parámetro "propiedad", no solo rating y title
    // Pista: https://flaviocopes.com/how-to-sort-array-of-objects-by-property-javascript/
  };
  
  exports.searchByCriteria = function (criterios) {
    // comienzo un array vacio que voy a empezar a rellenar con las respuestas de las funciones
    let tmp = getAll();
  
    if (criterios.search) {
      console.log("hay search y es", criterios.search);
      tmp = searchBy(criterios.search, tmp);
    } else {
      console.log("no hay search");
    }
  
    if (criterios.sort) {
      tmp = sortBy(criterios.sort, tmp);
      console.log("hay sort y es", criterios.sort);
    } else {
      console.log("no hay sort");
    }
    // .. y asi
    return tmp;
  };