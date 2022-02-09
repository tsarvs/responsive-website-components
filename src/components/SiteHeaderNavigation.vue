<!-- @format -->

<template>
  <div>
    <div v-if="mobileView">Hello, world! (Navigation - Mobile)</div>
    <div v-if="!mobileView">Hello, world! (Navigation - Desktop)</div>
  </div>
</template>

<script>
export default {
  name: 'SiteHeaderNavigation',
  props:{
    mobileView: Boolean,
  }
};
</script>

<style scoped lang="scss"></style>