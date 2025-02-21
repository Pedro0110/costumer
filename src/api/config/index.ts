import axios from 'axios';

const Client = axios.create({
  baseURL: 'http://viacep.com.br/ws/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: '*/*',
  },
});

export default Client;
