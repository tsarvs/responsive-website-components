<!-- @format -->

<template>
  <div ref="component" class="site-body-content">
    <router-view class="router-content"/>
  </div>
</template>

<script>
export default {
  name: 'SiteBodyContent',
};
</script>

<style scoped lang="scss">
.site-body-content{
  background-color: var(--site-background-color);
  color: #fff;

  height: 100%;
}
</style>