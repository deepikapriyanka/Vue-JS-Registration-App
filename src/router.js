import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/Home'
import Customer from './components/Customer'

Vue.use(VueRouter);
export const routes = [
    {
      path: '/',
      component: Home,
    }
]
export const router = new VueRouter({
    routes
  });
  
export default router;