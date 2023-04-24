<!-- @format -->

<template>
  <div>
    <NavigationMobile v-if="mobileView"/>
    <Navigation v-if="!mobileView"/>
  </div>
</template>

<script>
import NavigationMobile from "@/components/NavigationMobile";
import Navigation from "@/components/Navigation";

export default {
  name: 'SiteHeaderNavigation',
  props:{
    mobileView: Boolean,
  },
  components: {
    NavigationMobile,
    Navigation,
  },
};
</script>

<style scoped lang="scss"></style>