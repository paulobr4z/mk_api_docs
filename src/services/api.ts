import axios from 'axios';

const api = axios.create({
  baseURL: 'https://mkapi.up.railway.app/api/',
});

export default api;