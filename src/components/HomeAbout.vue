<template>
  <section class="home-intro sticky flex flex-block flex-center">
    <h1 class="title">About me</h1>
    <figure class="home-intro__image image">
      <img src="../assets/img-profile.jpeg" alt="My profile picture" width="150" height="150" />
    </figure>
    <p class="text">
      <emoji-wrapper>👋</emoji-wrapper>
      <span>Hi, I'm Eliamar</span>
    </p>
    <p class="text">
      <emoji-wrapper>⏳</emoji-wrapper>
      <span>Software Engineer for approx. 12 years</span>
    </p>
    <p class="text">
      <emoji-wrapper>🤓</emoji-wrapper>
      <span>I'm passionate about software development, frontend related topics, video games and photography.</span>
    </p>
  </section>
</template>

<style lang="scss">
.home-intro {
  background: #161616;
  color: #f4f4f4;

  &__image {
    margin: 0 0 1rem;

    img {
      border-radius: 50%;
    }
  }
}
</style>
