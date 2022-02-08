<template>
  <div class="header-container">
    <SiteHeaderLogo class="header-logo"/>
    <SiteHeaderNavigation class="header-nav"/>
  </div>
</template>

<script>
import SiteHeaderLogo from "@/components/SiteHeaderLogo";
import SiteHeaderNavigation from "@/components/SiteHeaderNavigation";

export default {
  name: 'SiteHeader',
  components: {
    SiteHeaderLogo,
    SiteHeaderNavigation,
  },
};
</script>

<style scoped lang="scss"></style>