const pelis = require("./pelisTest.js");

function parsearARGV() {
  //... acá ocurre la magia
  const arguments = process.argv.slice(2);
  
  let argObj = {

  };

  // Identificar los diferentes parámetros

  if(arguments.length == 0 || arguments == null ){
    argObj.noParameter = true;
  }else{
    argObj.noParameter = false;
  };

  if(arguments.includes('--no-format') || arguments.includes('--no-Format') ){
    // const argumentIndex = arguments.indexOf('--no-format');
    // const parameterValue = true;
    argObj.noFormat = true;
  }else{
    argObj.noFormat = false;
  }

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

  // console.log(arguments);

  return argObj
}


function main() {
  const comandosAEjecutar = parsearARGV();

  console.log(pelis.searchByCriteria(comandosAEjecutar));

}

main();