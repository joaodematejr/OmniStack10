import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.2.153:9000',
})

export default api;