<template>
  <div ref="component" class="header-container">
    <SiteHeaderLogo class="header-logo"/>
    <SiteHeaderNavigation class="header-nav" :mobile-view="this.mobileView"/>
  </div>
</template>

<script>
import SiteHeaderLogo from "@/components/SiteHeaderLogo";
import SiteHeaderNavigation from "@/components/SiteHeaderNavigation";

const componentResizeWith = 600;

export default {
  name: 'SiteHeader',
  components: {
    SiteHeaderLogo,
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

  background-color: var(--site-menu-color);
  color: white;

  .header-logo{
    padding-left: 1rem;
  }

  .header-nav{
    padding-right: 1rem;
  }
}
</style>