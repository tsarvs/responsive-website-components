<template>
  <div ref="component" :class="['hero-block', { 'resized-hero': resizedView }]">
    <video autoplay loop class="hero-background">
      <source src="../assets/flowers.mp4" type="video/mp4">
    </video>
    <div class="hero-content">
      <div class="hero-text">
        <h1 class="hero-title">Elegant. Responsive. Fast.</h1>
        <h2 class="hero-subtitle">Powerful websites built for all screen sizes.</h2>
      </div>
      <div class="hero-button">
        <a href="https://github.com/tsarvs/responsive-website-components">
          <button type="button">Learn how!</button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
const componentResizeWidth = 457;

export default {
  name: 'HeroBlock',
  mounted() {
    new ResizeObserver((entries) => {
      this.resizedView = entries[0].contentRect.width <= componentResizeWidth;
    }).observe(this.$refs.component);
  },
  data: () => {
    return {
      resizedView: false,
    };
  },
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
    bottom: 0;
    width: 100%;
  }

  .hero-content {
    z-index: 1;
    margin: 1.5rem;

    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: center;
  }

  .hero-text {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;

    h1{
      font-family: var(--display-font-family);
      font-size: 2.5rem;
    }

    h1, h2{
      text-align: center;

      text-shadow: var(--drop-shadow);
    }
  }

  .hero-button {
    padding-left: 3rem;

    button {
      box-shadow: var(--drop-shadow-object)
    }
  }
}

.resized-hero {
  .hero-content{
    flex-flow: column nowrap;
  }

  .hero-background {
    width: auto;
    top: 0;
    height: 100%;
  }

  .hero-button {
    padding: 0;
  }
}
</style>