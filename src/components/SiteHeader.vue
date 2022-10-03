<template>
  <div ref="component" class="header-container">
    <SiteLogo class="header-logo"/>
    <SiteHeaderNavigation class="header-nav" :mobile-view="this.mobileView"/>
  </div>
</template>

<script>
import SiteLogo from "@/components/SiteLogo";
import SiteHeaderNavigation from "@/components/SiteHeaderNavigation";

const componentResizeWith = 600;

export default {
  name: 'SiteHeader',
  components: {
    SiteLogo,
    SiteHeaderNavigation,
  },
  async mounted(){
    new ResizeObserver(entries => {
      this.mobileView = entries[0].contentRect.width <= componentResizeWith;
    }).observe(this.$refs.component);
  },
  data: function (){
    return{
      mobileView: false,
    };
  },
};
</script>

<style scoped lang="scss">
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 5rem;
  z-index: 999;

  background-color: var(--site-menu-color);
  box-shadow: var(--drop-shadow-object);

  .header-logo{
    padding-left: 1rem;
  }

  .header-nav{
    padding-right: 1rem;
  }
}
</style>