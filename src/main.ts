import { createApp } from "vue";

import "./styles/main.scss";

import App from "./App.vue";
import EmojiWrapper from "./components/EmojiWrapper.vue";

const app = createApp(App);

app.component("EmojiWrapper", EmojiWrapper);
app.mount("#app");
