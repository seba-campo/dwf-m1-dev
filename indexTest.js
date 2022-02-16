const pelis = require("./pelisTest.js");

function parsearARGV() {
  //... acá ocurre la magia
  const arguments = process.argv.slice(2);

  var argReturn = {
      search = "testSearch",
      sort = "testSort"      
    }
  
  
  return argReturn
}

function main() {
  const comandosAEjecutar = parsearARGV();

  pelis.searchByCriteria(comandosAEjecutar);
}

main();