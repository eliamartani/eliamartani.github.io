<template>
  <SectionCard aria-label="About me">
    <h1 class="font-bold mb-6 text-3xl text-cyan-800 md:text-4xl">Hi, I'm Eliamar 👋</h1>

    <div class="md:flex md:flex-row">
      <figure class="relative md:align-middle md:flex md:flex-col md:justify-center">
        <img
          src="@/assets/img-profile.jpeg"
          class="rounded-full transition w-36 md:w-64"
          loading="lazy"
          alt="My profile picture"
          height="137"
          width="137"
        />
      </figure>
      <div class="flex-auto my-4 md:m-6">
        <TextElement>
          Software Engineer for approx. NaN
          <!-- i'm just kidding 😙 -->
          years
        </TextElement>
        <TextElement>
          I'm passionate about software development, frontend related topics, pokémon and photography.
        </TextElement>
      </div>
    </div>
  </SectionCard>
</template>
