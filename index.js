const pelis = require("./pelis.js");

function parsearARGV() {
  //... acá ocurre la magia
  const arguments = process.argv.slice(2);
  
  let argObj = {

  };

  // Identificar los diferentes parámetros
  if(arguments.includes('--help') || arguments.includes('--comands') || arguments.length == 0){
    const leyenda = `
                  -----Comandos-----
        "--no-format": Devuelve la lista de películas sin formato.
        "--search": Buscar película por título
        "--sort": Ordenar listado de películas por parametro (title, rating, etc)
        "--tag": Devuelve las películas filtradas por el tag deseado.

        Si no enviás ningún parámetro, mostrará una tabla con películas y este mensaje de --help
    `;
    
    console.log(leyenda);
  };

  if(arguments.length == 0 || arguments == null ){
    argObj.noParameter = true;
  };

  if(arguments.includes('--no-format') || arguments.includes('--no-Format') ){
    argObj.noFormat = true;
  };

  if(arguments.includes('--search')){
    const argumentIndex = arguments.indexOf('--search');
    const parameterValue = arguments[argumentIndex + 1];

    argObj.search = parameterValue;
  };

  if(arguments.includes('--sort')){
    const argumentIndex = arguments.indexOf('--sort');
    const parameterValue = arguments[argumentIndex + 1];

    argObj.sort = parameterValue;
  };

  if(arguments.includes('--tag')){
    const argumentIndex = arguments.indexOf('--tag');
    const parameterValue = arguments[argumentIndex + 1];

    argObj.tag = parameterValue;
  };


  return argObj
}


function main() {
  const comandosAEjecutar = parsearARGV();

  console.log(pelis.searchByCriteria(comandosAEjecutar));

}

main();