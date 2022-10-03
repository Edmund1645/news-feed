import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// eslint-disable-next-line no-unused-vars
import * as bootstrap from "bootstrap";

import "./assets/scss/main.scss";

const app = createApp(App);

app.use(router);
app.use(store);

app.mount("#app");
