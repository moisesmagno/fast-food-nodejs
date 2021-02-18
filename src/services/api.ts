import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.64.3/fast-food-laravel/public/api/v1',
});

export default api;
