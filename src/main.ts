import { createApp } from "vue";
import App from "./App.vue";

// define global css
import "./styles/main.css";

// create app instance
const app = createApp(App);

// app mount
app.mount("#app");
