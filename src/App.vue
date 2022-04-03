<script setup lang="ts">
import ProfileAbout from "./components/ProfileAbout.vue";
import ProfileContact from "./components/ProfileContact.vue";
import ProfileLinkouts from "./components/ProfileLinkouts.vue";
import ProfilePortfolio from "./components/ProfilePortfolio.vue";
</script>

<template>
  <div class="bg-slate-200 box-border flex flex-col min-h-screen p-4 md:justify-center md:p-10">
    <div
      class="bg-slate-50 box-border p-8 rounded-md shadow-md w-full md:max-w-3xl md:mx-auto md:my-0 md:rounded-lg md:shadow-xl"
    >
      <profile-about />
      <profile-portfolio />
      <profile-contact />
    </div>

    <profile-linkouts />
  </div>
</template>
