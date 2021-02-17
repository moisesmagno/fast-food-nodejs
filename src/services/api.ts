import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080/fast-food-laravel/public/api/v1',
});

export default api;
