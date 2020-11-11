<template>
  <div
    class="vue-card"
    @mouseenter="handleEnter"
    @mousemove="handleMove"
    @mouseleave="handleLeave"
  >
    <div class="vue-card__container" :style="cardStyle">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';

function useVueCard() {
  const constrain = 30;
  const rotationRef = ref([0, 0]);
  const cardStyle = computed(() => ({
    transform: `perspective(2000px) rotateX(${rotationRef.value[0]}deg) rotateY(${rotationRef.value[1]}deg)`,
  }));
  const approxDegree = (e) => {
    const box = e.target.getBoundingClientRect();
    const calcX = Math.ceil(-(e.clientY - box.y - box.height / 2) / constrain);
    const calcY = Math.ceil((e.clientX - box.x - box.width / 2) / constrain);

    rotationRef.value = [calcX, calcY];
  };
  const handleEnter = (e) => approxDegree(e);
  const handleLeave = () => (rotationRef.value = [0, 0]);
  const handleMove = (e) => approxDegree(e);

  return {
    cardStyle,
    handleEnter,
    handleLeave,
    handleMove,
  };
}

export default defineComponent({
  name: 'vue-card',

  setup() {
    return {
      ...useVueCard(),
    };
  },
});
</script>

<style>
.vue-card .vue-card__container {
  box-sizing: border-box;
  height: 100%;
  transition: 0.2s;
  width: 100%;
}
</style>
