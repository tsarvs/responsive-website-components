<template>
  <div ref="component" class="hero-block">
    <video autoplay loop class="hero-background">
      <source src="../assets/flowers.mp4" type="video/mp4">
    </video>
    <div class="hero-text">
      <h1 class="hero-title">Responsive. Beautiful. Fast.</h1>
      <h2 class="hero-subtitle">Websites built for all screen sizes.</h2>
    </div>
    <div class="hero-button">
      <a href="https://github.com/tsarvs/responsive-website-components">
        <button type="button">Learn how!</button>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroBlock',
};
</script>

<style scoped lang="scss">
.hero-block {
  background-color: var(--shades-light);
  height: calc(100vh - var(--site-menu-height));

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;

  .hero-background {
    position: absolute;
    width: 100%;
    bottom: -10rem;
  }

  .hero-text {
    z-index: 1;

    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
  }

  .hero-button {
    z-index: 1;
    padding-left: 3rem;

    cursor: pointer;
  }
}
</style>