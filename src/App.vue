<template>
  <div id="app">
    <SiteHeader/>
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
    SiteBody
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  width: 100vw;
}
</style>
