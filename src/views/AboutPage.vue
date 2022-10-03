<template>
  <div ref="content">
    <div class="about-page-title">About Page</div>
    <content-slider>
      <slide>
        <div>body1</div>
      </slide>
      <slide>
        <div>body2</div>
      </slide>
      <slide>
        <div>body3</div>
      </slide>
    </content-slider>
  </div>
</template>

<script>
import ContentSlider from "@/components/ContentSlider";
import Slide from "@/components/ContentSliderSingleSlide";

export default {
  name: 'AboutPage', components: {
    ContentSlider,
    Slide,
  },
};
</script>

<style scoped lang="scss"></style>