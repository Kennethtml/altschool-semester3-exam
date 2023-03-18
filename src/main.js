import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "@/Routes/HomePage.vue"
import ReposPage from "@/Routes/ReposPage.vue";
import RepoPage from "@/Routes/RepoPage.vue"
import ErrorPageVue from './Routes/ErrorPage.vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'


/* add icons to the library */
library.add(faUserSecret)

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
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: ErrorPageVue,
    },
  ],
});

createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
