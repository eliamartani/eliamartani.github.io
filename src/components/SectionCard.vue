<script setup lang="ts">
interface SectionCardProps {
  scaleOnHover?: boolean;
}

withDefaults(defineProps<SectionCardProps>(), {
  scaleOnHover: true,
});
</script>

<template>
  <section
    class="bg-slate-50 box-border mt-5 p-8 rounded-md shadow-md w-full md:max-w-3xl md:mx-auto md:rounded-lg md:shadow-xl transition-transform"
    :class="{
      'hover:scale-105': scaleOnHover,
    }"
  >
    <slot />
  </section>
</template>
