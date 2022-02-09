<template>
  <div ref="component" id="site-body">
    <div>Hello, world! (Body)</div>
    <SiteFooter/>
  </div>
</template>

<script>
import SiteFooter from "@/components/SiteFooter";

export default {
  name: 'SiteBody',
  components: {
    SiteFooter
  },
};
</script>

<style scoped lang="scss">
#site-body{
  height: 100%;

  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
}
</style>