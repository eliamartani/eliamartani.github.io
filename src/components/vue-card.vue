<template>
  <div class="vue-card" v-on="events">
    <div class="vue-card__container" :style="cardStyle">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'vue-card',

  props: {
    constrain: {
      required: false,
      type: Number,
      default: 30,
    },
    perspective: {
      required: false,
      type: String,
      default: '2000px',
    },
  },

  setup(props) {
    const rotationRef = ref([0, 0]);
    const cardStyle = computed(() => ({
      transform: `perspective(${props.perspective}) rotateX(${rotationRef.value[0]}deg) rotateY(${rotationRef.value[1]}deg)`,
    }));
    const approxDegree = (e) => {
      const box = e.target.getBoundingClientRect();
      const calcX = Math.ceil(
        -(e.clientY - box.y - box.height / 2) / props.constrain
      );
      const calcY = Math.ceil(
        (e.clientX - box.x - box.width / 2) / props.constrain
      );

      rotationRef.value = [calcX, calcY];
    };
    const events = computed(() => ({
      mouseenter: (e) => approxDegree(e),
      mouseleave: () => (rotationRef.value = [0, 0]),
      mousemove: (e) => approxDegree(e),
    }));

    return {
      cardStyle,
      events,
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
