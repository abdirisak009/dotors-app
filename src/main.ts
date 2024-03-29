import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';


import './style.css';

const router = createRouter({
  routes: [
    
    
   
  ],
  history: createWebHistory(),
});

const app = createApp(App);

// Tell the application to use the router.
app.use(router);

app.mount('#app');
