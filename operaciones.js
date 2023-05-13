const fs = require('fs');

const registrar = (argumentos) => {
    let datosNuevaCita = {
    nombre:argumentos[1],
    edad:argumentos[2],
    animal:argumentos[3],
    color:argumentos[4],
    sintoma: argumentos[5],
    };

    if (argumentos.length != 6) {
        console.log('Todos los campos son obligatorios');
        return;

    } else {
        let nuevaCita = fs.readFileSync('./citas.json', 'utf8');
        let parseCitas = JSON.parse(nuevaCita);
        parseCitas.push(datosNuevaCita);

        let citasJson = JSON.stringify(parseCitas, null, 2);
        fs.writeFileSync('./citas.json', citasJson);
        console.log('Nueva Cita Registrada');
    }
};

const leer = () => {
    const datosCitas = fs.readFileSync('./citas.json', 'utf8');
    const datosCitasJson = JSON.parse (datosCitas)

    console.log ("Listado de Citas Agendadas:");
    for (data of datosCitasJson){
        const tempContent = `
        Nombre: ${data.nombre}
        Edad: ${data.edad}
        Síntoma: ${data.sintoma}
        `;
        console.log(tempContent);
    }
};

module.exports = {
    registrar,
    leer,
};