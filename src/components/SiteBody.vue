<template>
  <div ref="component" id="site-body">
    <SiteBodyContent/>
    <SiteFooter/>
  </div>
</template>

<script>
import SiteBodyContent from "@/components/SiteBodyContent";
import SiteFooter from "@/components/SiteFooter";

export default {
  name: 'SiteBody',
  components: {
    SiteBodyContent,
    SiteFooter,
  },
};
</script>

<style scoped lang="scss">
#site-body{
  min-height: calc(100vh - var(--site-menu-height));

  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
}
</style>