<script setup lang="ts">
import ProfileAbout from "./components/Profile/ProfileAbout.vue";
import ProfileContact from "./components/Profile/ProfileContact.vue";
import ProfilePortfolio from "./components/Profile/ProfilePortfolio.vue";
</script>

<template>
  <div class="bg-slate-200 box-border flex flex-col min-h-screen p-4 md:justify-center md:p-10">
    <ProfileAbout />
    <ProfilePortfolio />
    <ProfileContact />
  </div>
</template>
