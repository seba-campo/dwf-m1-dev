const pelis = require('./pelis.js');
const argv = process.argv.slice(2);

function main(){
    
    if(argv.length == 0){
        pelis.noParameter();
        pelis.noFormat();
    }

    if(argv.includes('-help') || argv.includes('-cmd')){
        const leyenda = `
                    -----Comandos-----
            "-find": Buscar película por título.
            "-sort": Ordenar listado de películas por parametro
        `;
        
        console.log(leyenda);
    };

    if(argv.includes('-find')) {
        const parameterIndex = argv.indexOf('-find');
        const parameterValue = argv[parameterIndex + 1];

        console.log(pelis.buscar(parameterValue));
        console.log("Se ejecuto find con el parametro: " + parameterValue);
    }
    
    if (argv.includes('-sort')) {
        const parameterIndex = argv.indexOf('-sort');
        const parameterValue = argv[parameterIndex + 1];

        console.log(parameterIndex, parameterValue);

        console.table(pelis.ordenar(parameterValue));
        console.log("Se ejecuto sort con el argumento " + parameterValue);
    }

};

main();