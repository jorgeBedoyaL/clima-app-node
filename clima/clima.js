//importamos axios porque vamos a trabajar con res
const axios = require('axios');


const getClima = async(lat, lng) => {
    //Copiar la url del ejemplo openweathermap y llevado postman y pegarlo aqui
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=754ed271e6cba9343ada446bae783adf&units=metric`)
    return resp.data.main.temp;
}

module.exports = {
    getClima
}