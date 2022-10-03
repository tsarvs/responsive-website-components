<!-- @format -->

<template>
  <div ref="component" :class="['content-slider', {'resized-slider': resizedView}]">
    <div class="content-slider-body">
      <div class="content-slider-navigation">
        <div class="content-slider-left-arrow">
          <i class="fa-solid fa-chevron-left"></i>
        </div>
        <div class="content-slider-slides">slides</div>
        <div class="content-slider-right-arrow">right</div>
      </div>
      <div class="content-slider-body-content">
        <slot/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: JSON
  },
  name: 'ContentSlider',
  async mounted(){},
  data: () => {
    return {
      resizedView: false,
    }
  }

};
</script>

<style scoped lang="scss">
.content-slider {
  height: calc(100vh - var(--site-menu-height));
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;

  .content-slider-body {
    height: 100%;
    display: flex;
    justify-content: center;

    .content-slider-body-content {
      width: 100%;
      height: 100%;
      display: flex;
      flex-flow: row nowrap;

      :deep(.slide-content) {
        height: 100%;
        width: 100%;
        position: absolute;
      }
    }

    .content-slider-navigation {
      align-self: flex-end;
      position: absolute;
      height: 50%;
      width: 100%;

      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      .content-slider-left-arrow {
        align-self: flex-start;
      }
      .content-slider-right-arrow {
        align-self: flex-start;
      }
      .content-slider-slides {
        align-self: flex-end;
      }
    }
  }
}
</style>