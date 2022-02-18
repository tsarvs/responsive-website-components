<template>
  <div ref="component" :class="['hero-block', { 'resized-hero': resizedView }]">
    <div class="hero-background-container">
      <div class="hero-background-overlay"/>
      <video class="hero-background" poster="../assets/poster.png" autoplay muted loop>
        <source src="../assets/flowers-0.mp4" type="video/mp4">
      </video>
    </div>
    <div class="hero-content">
      <div class="hero-text">
        <h1 class="hero-title">Elegant. Responsive. Fast.</h1>
        <h2 class="hero-subtitle">Powerful websites built for all screen sizes.</h2>
      </div>
      <div class="hero-button">
        <a href="https://github.com/tsarvs/responsive-website-components">
          <button type="button">Build yours!</button>
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
  box-shadow: var(--drop-shadow-object);
  height: calc(100vh - var(--site-menu-height));

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;

  .hero-background-container {
    position: absolute;
    bottom: 0;
    width: 100%;

    display: flex;
    flex-flow: row nowrap;

    .hero-background-overlay{
      position: absolute;
      background-color: var(--secondary-color-dark);
      opacity: .3;
      width: 100%;
      height: 100%;
    }

    .hero-background {
      bottom: 0;
      width: 100%;
    }
  }

  .hero-content {
    z-index: 1;
    margin: 0;

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

    .hero-title{
      font-family: var(--display-font-family);
      font-size: 2.5rem;
      line-height: 2.5rem;
    }

    .hero-title, .hero-subtitle{
      text-align: center;

      margin: .5rem;
    }
  }

  .hero-button {
    padding-left: 2rem;
    margin: .5rem;

    button {
      box-shadow: var(--drop-shadow-object)
    }
  }
}

.resized-hero {
  .hero-content{
    flex-flow: column nowrap;

    .hero-subtitle{
      padding: 1rem 0;
    }
  }

  .hero-background-container {
    width: auto;
    height: 100%;

    .hero-background {
      height: 100%;
      width: auto;
    }
  }

  .hero-button {
    padding: 0;
  }
}
</style>