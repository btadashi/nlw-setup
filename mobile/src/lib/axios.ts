import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://192.168.237.71:3333',
});
