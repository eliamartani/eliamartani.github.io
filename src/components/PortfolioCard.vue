<script setup lang="ts">
interface PortfolioCardProps {
  title: string;
  description: string;
  image: string;
}

defineProps<PortfolioCardProps>();
</script>

<template>
  <section
    class="bg-slate-50 box-border mt-5 p-8 rounded-md shadow-md w-full md:max-w-3xl md:mx-auto md:rounded-lg md:shadow-xl"
  >
    <div class="flex flex-col space-y-4">
      <h2 class="text-2xl font-bold text-slate-900">{{ title }}</h2>
      <p class="text-slate-700">{{ description }}</p>
      <img :src="image" alt="Brand logo" class="w-full h-32 object-fill rounded-md" />
    </div>
  </section>
</template>
