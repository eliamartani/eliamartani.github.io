<template>
  <vue-card class="app-card">
    <div class="app-card__info">
      <h1>Eliamar Tani</h1>
      <h2>Frontend developer</h2>
      <p>Will program for food</p>
    </div>
    <div class="app-card__links">
      <a href="https://github.com/eliamartani" rel="noopener" target="_blank">
        <img src="./assets/github.svg" alt="github" loading="lazy" />
      </a>
      <a
        href="https://www.linkedin.com/in/eliamartani/"
        rel="noopener"
        target="_blank"
      >
        <img src="./assets/linkedin.svg" alt="linkedin" loading="lazy" />
      </a>
    </div>
  </vue-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import VueCard from './components/vue-card.vue';

export default defineComponent({
  name: 'App',

  components: {
    'vue-card': VueCard,
  },
});
</script>

<style>
.app-card {
  align-items: center;
  box-sizing: border-box;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100%;
}
.app-card .vue-card__container {
  box-shadow: 0 0 50px 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  height: 25rem;
  padding: 2rem;
  width: 38rem;
}
.app-card .vue-card__container h1 {
  font-size: 2.5rem;
  font-weight: 800;
}
.app-card .vue-card__container h2 {
  font-size: 1.5rem;
}
.app-card .vue-card__container p {
  font-size: 1.2rem;
}
.app-card .vue-card__container .app-card__links {
  margin-top: auto;
}
.app-card .vue-card__container .app-card__links img {
  transition: transform 0.2s ease-in-out;
}
.app-card .vue-card__container .app-card__links img:hover {
  transform: scale(1.05);
}
</style>
