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

<style scoped lang="scss">
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 80px;

  background-color: black;
  color: white;

  .header-logo{
    padding-left: 1rem;
  }

  .header-nav{
    padding-right: 1rem;
  }
}
</style>