import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Todo from "./views/Todos.vue";
import "./assets/style.css";

createApp(Todo)
  // .use(store)
  // .use(router)
  .mount("#app");
