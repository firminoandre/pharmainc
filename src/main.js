import { createApp } from 'vue'
import { createWebHistory, createRouter,  } from "vue-router";
import App from './App.vue'
import './assets/tailwind.css'
import Dashboard from './components/Dashboard'
import store from './store'


const routes = [
    {
      name: "Dashboard",
      path: "/",
      component: Dashboard,
    },
  ];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


createApp(App).use(store).use(router).mount('#app')
