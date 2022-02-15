<template>
  <div id="app">
      <SiteHeader class="site-header"/>
      <SiteBody/>
  </div>
</template>

<script>
import SiteHeader from "@/components/SiteHeader";
import SiteBody from "@/components/SiteBody";

export default {
  name: 'App',
  components: {
    SiteHeader,
    SiteBody,
  },
}
</script>

<style scoped lang="scss">
#app {
  font-family: var(--primary-font-family);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  width: 100%;

  display: flex;
  flex-flow: column;

  overflow: hidden;
}

.site-header{
}
</style>
