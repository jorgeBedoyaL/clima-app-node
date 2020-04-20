const axios = require('axios');

//Obtener la latitud y longitud del lugar
//Una funcion async siempre retorna una promesa
const getLugarLatLng = async(dir) => {
    // Obtener la direccion y escaparlo en url (%)
    const encodedUlr = encodeURI(dir);
    // console.log(encodedUlr);
    //Instancia de la peticion
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUlr}`,
        timeout: 1000,
        headers: { 'x-rapidapi-key': 'f9462441bcmsh11fe1d0fd0b42ddp1bb3e1jsn0b1d08d93aa9' }
    });

    //Instancia de la peticion
    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }
    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;
    // Lo que quiero retornar
    return {
        direccion,
        lat,
        lng
    }
}

// exportar el modulo
module.exports = {
    getLugarLatLng
}