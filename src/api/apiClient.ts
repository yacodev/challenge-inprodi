import axios from 'axios';
import config from '../config';

const apiClient = () => {
  const instance = axios.create({
    baseURL: config.API_URL,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${config.API_KEY}`,
    },
    responseType: 'json',
  });
  return instance;
};

export default apiClient;
