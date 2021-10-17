<template>
  <span class="emoji-wrapper">
    <slot />
  </span>
</template>

<style lang="scss">
.emoji-wrapper {
  & + * {
    margin-left: 0.6rem;
  }

  * + & {
    margin-left: 0.6rem;
    margin-right: 0.6rem;
  }
}
</style>
