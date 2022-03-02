import { createApp } from 'vue'
import { createWebHistory, createRouter,  } from "vue-router";
import App from './App.vue'
import './assets/tailwind.css'
import Dashboard from './components/Dashboard'


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


createApp(App).use(router).mount('#app')
