<template>
  <section class="home-contact sticky flex flex-block flex-center">
    <h1 class="title">Contact</h1>
    <p class="text">Follow me on my social media accounts and have a chat!</p>
    <p class="text">
      <emoji-wrapper>📧</emoji-wrapper>
      <a href="mailto:eliamartani@gmail.com" class="home-contact__link">e-mail</a>
    </p>
    <p class="text">
      <emoji-wrapper>📰</emoji-wrapper>
      <a href="https://www.linkedin.com/in/eliamartani/" class="home-contact__link" rel="noopener" target="_blank">
        linkedin.com/in/eliamartani
      </a>
    </p>
    <p class="text">
      <emoji-wrapper>📸</emoji-wrapper>
      <a href="https://www.instagram.com/el_iamar/" class="home-contact__link" rel="noopener" target="_blank">
        instagram.com/el_iamar
      </a>
    </p>
    <p class="text">
      <emoji-wrapper>🛠️</emoji-wrapper>
      <a href="https://github.com/eliamartani/" class="home-contact__link" rel="noopener" target="_blank">
        github.com/eliamartani
      </a>
    </p>
    <p class="text">
      <emoji-wrapper>🎨</emoji-wrapper>
      <a href="https://codepen.io/eliamartani/" class="home-contact__link" rel="noopener" target="_blank">
        codepen.io/eliamartani
      </a>
    </p>
  </section>
</template>

<style lang="scss">
.home-contact {
  background: #121212;
  color: #f4f4f4;

  @include media-query($screen-tablet) {
    margin-left: 50%;
    width: 50%;
  }

  &__link {
    color: #fff;

    &:hover {
      color: #c0c0c0;
    }
  }
}
</style>
