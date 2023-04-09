import Vue from "vue";
import Router from "vue-router";
import PostPage from "@/pages/PostPage";
import HomePage from "@/pages/HomePage";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: HomePage
    },
    {
      path: "/posts/:id",
      name: "PostPage",
      component: PostPage
    }
  ]
});
