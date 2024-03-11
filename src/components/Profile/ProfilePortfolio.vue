<script setup lang="ts">
import portfolioJson from "@/assets/json/portfolio.json";

function loadPortfolioImage(imageName: string) {
  return new URL(`../../assets/portfolio/${imageName}`, import.meta.url).href;
}
</script>

<template>
  <SectionCard aria-label="Portfolio" :scale-on-hover="false">
    <TitleElement>Porfolio</TitleElement>

    <TextElement>
      I've worked for a lot of freelance projects but I decided not to mention them here. Only emphesize some active
      projects.
    </TextElement>

    <div class="flex flex-wrap -mx-4">
      <div v-for="portfolio in portfolioJson" :key="portfolio.title" class="w-full md:w-1/2 px-4 mb-8">
        <PortfolioCard
          :title="portfolio.title"
          :description="portfolio.description"
          :image="loadPortfolioImage(portfolio.image)"
        />
      </div>
    </div>
  </SectionCard>
</template>
