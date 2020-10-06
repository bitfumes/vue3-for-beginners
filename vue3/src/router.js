import { createRouter, createWebHistory } from "vue-router";
import DcHeros from "./pages/DcHeros";
import Calendar from "./pages/Calendar";
import Home from "./pages/Home";
import Markdown from "./pages/Markdown";
import Slider from "./pages/Slider";
import Calculator from "./pages/Calculator";
import ReuseableModal from "./pages/ReuseableModal";
import UserCrud from "./pages/UserCrud";
import Chat from "./pages/Chat";
import Tensorflow from "./pages/Tensorflow";
import store from "./store/index";

const routes = [
  { path: "/", component: Home },
  { path: "/dc-heros", component: DcHeros },
  { path: "/calendar", component: Calendar },
  { path: "/markdown", component: Markdown },
  { path: "/slider-carousel", component: Slider },
  { path: "/calculator", component: Calculator, meta: { middleware: "auth" } },
  { path: "/resuseable-modal", component: ReuseableModal },
  {
    path: "/chat",
    component: Chat,
    meta: { middleware: "auth" },
  },
  { path: "/user-crud", component: UserCrud },
  { path: "/tensorflow", component: Tensorflow },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, _, next) => {
  if (to.meta.middleware) {
    const middleware = require(`./middleware/${to.meta.middleware}`);
    if (middleware) {
      middleware.default(next, store);
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
