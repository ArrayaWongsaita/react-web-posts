// axios Config.js

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api-post-ts.onrender.com/api/v1',
});

export default axiosInstance;
