const {registrar, leer} = require('./operaciones');

const argumentos = process.argv.slice(2);

if (argumentos[0] === "registrar") {
    registrar(argumentos);
};

if (argumentos[0] === "leer") {
    leer('./citas.json');
};

