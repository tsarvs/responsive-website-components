<template>
  <div ref="view">
    <hero-block/>
    <welcome-block/>
  </div>
</template>

<script>
import HeroBlock from "@/components/HeroBlock";
import WelcomeBlock from "@/components/WelcomeBlock";

export default {
  name: 'HomePage',
  components: { HeroBlock,  WelcomeBlock, },
};
</script>

<style scoped lang="scss"></style>