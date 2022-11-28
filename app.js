const { CrearArchivo } = require("./helpers/multiplicar");
const  argv  = require("./config/yargs");
const colors = require('colors');

console.clear();

//console.log(argv);

//const base = 1;
//console.log(process.argv);
//const [, , arg3 = "base=5"] = process.argv; //process.argv argumentos de pantalla, apartir de posicion 2
//const [, base = 5] = arg3.split("=");
//console.log(base);

//console.log("base: yargs", argv.b);


CrearArchivo(argv.b, argv.l, argv.h)
  .then((nombreArchivo) => console.log(nombreArchivo.rainbow, "creado"))
  .catch((err) => console.log(err));
