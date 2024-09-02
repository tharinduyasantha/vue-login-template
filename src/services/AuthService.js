// src/services/authService.js
import axios from '../axios';

const authService = {
  login: (credentials) => axios.post('/login', credentials),
  forgetPassword: (email) => axios.post('/forget-password', { email }),
  resetPassword: (token, newPassword) => axios.post('/reset-password', { token, newPassword }),
};

export default authService;