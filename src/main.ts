import { createApp } from "vue";
import App from "@/App.vue";

// define global css
import "@/styles/main.css";

// define global components
import PortfolioCard from "@/components/PortfolioCard.vue";
import SectionCard from "@/components/SectionCard.vue";
import TextElement from "@/components/TextElement.vue";
import TitleElement from "@/components/TitleElement.vue";

// create app instance
const app = createApp(App);

app.component("PortfolioCard", PortfolioCard);
app.component("SectionCard", SectionCard);
app.component("TextElement", TextElement);
app.component("TitleElement", TitleElement);

// app mount
app.mount("#app");
