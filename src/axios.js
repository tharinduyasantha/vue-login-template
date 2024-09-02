// src/axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://your-api-url.com', // Replace with your actual API base URL
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
