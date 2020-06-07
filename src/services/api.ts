import axios from 'axios';

const api = axios.create({
    //baseURL: 'http://192.168.1.119:3333'
    baseURL: 'https://fff-nlw-server.herokuapp.com'
});

export default api;