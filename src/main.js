import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "@/Routes/HomePage.vue"
import ReposPage from "@/Routes/ReposPage.vue";
import RepoPage from "@/Routes/RepoPage.vue"
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomePage,
    },
    {
      path: "/repos",
      name: "ReposPage",
      component: ReposPage,
    },
    {
      path: "/repos/:id",
      name: "RepoPage",
      component: RepoPage,
    },
  ],
});

createApp(App).use(router).mount('#app')
