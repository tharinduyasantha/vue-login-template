// src/router/index.js
import Vue from 'vue';
import Router from 'vue-router';
import LoginForm from '../components/LoginForm.vue';
import ForgotPassword from '../components/ForgotPassword.vue';
import ResetPassword from '../components/ResetPassword.vue';
import Home from '../views/HomeView.vue'; // Replace with your actual Home component

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginForm,
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: ForgotPassword,
  },
  {
    path: '/reset-password',
    name: 'ResetPassword',
    component: ResetPassword,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
];

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});
