const lugar = require('./lugar/lugar');
//Llamar a la funcion clima
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: { //Argumento
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv; // argv es para obtener los argumentos

//console.log(argv.direccion);

//Retorna una promesa
//lugar.getLugarLatLng(argv.direccion)
//    .then(console.log);

//Probar
/* clima.getClima(40.750000, -74.000000)
    .then(console.log)
    .catch(console.log) */

const getInfo = async(direccion) => {
    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${coords.direccion} es de ${temp}.`
    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`;
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);