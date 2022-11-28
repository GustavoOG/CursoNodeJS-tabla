const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "base de Tabla a multiplicar",
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    default : 10,
    demandOption: true,
    describe: "Limite de Tabla a multiplicar",
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    describe: "bandera para mostrar Tabla en consola",
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base debe ser un número";
    }
    if(argv.b > argv.h){
        throw "La base no puede ser mayor a hasta";        
    }
    return true;
  }).argv;

module.exports = argv;
