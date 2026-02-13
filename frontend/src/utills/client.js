import axios from 'axios';

// Use the environment variable from .env
const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,  // <-- this is your backend URL
  headers: {
    'Content-Type': undefined,
  },
});

export default axiosClient;

