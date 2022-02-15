<template>
  <div ref="view">
    <hero-block/>
  </div>
</template>

<script>
import HeroBlock from "@/components/HeroBlock";

export default {
  name: 'HomePage',
  components: { HeroBlock },
};
</script>

<style scoped lang="scss"></style>