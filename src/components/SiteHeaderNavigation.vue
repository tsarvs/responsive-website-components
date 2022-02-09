<!-- @format -->

<template>
  <div>
    <div v-if="mobileView">
      <NavigationMobile/>
    </div>
    <div v-if="!mobileView">
      <NavigationDesktop/>
    </div>
  </div>
</template>

<script>
import NavigationMobile from "@/components/NavigationMobile";
import NavigationDesktop from "@/components/NavigationDesktop";

export default {
  name: 'SiteHeaderNavigation',
  props:{
    mobileView: Boolean,
  },
  components: {
    NavigationMobile,
    NavigationDesktop,
  },
};
</script>

<style scoped lang="scss"></style>