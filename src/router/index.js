import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/MyBalls.vue";
import CreateBall from "../views/CreateBall.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "MyBalls",
    component: Home
  },
  {
    path: "/create-ball",
    name: "CreateBall",
    component: CreateBall
  }
];

const router = new VueRouter({
  routes
});

export default router;
