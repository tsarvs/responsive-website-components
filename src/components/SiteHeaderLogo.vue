<template>
  <div ref="component" class="site-logo">
    <a href="#">
      <img alt="logo" src="../assets/ts-logo-inverted-white-small.png">
    </a>
  </div>
</template>

<script>
export default {
  name: 'SiteHeaderLogo',
};
</script>

<style scoped lang="scss">
.site-logo{
  display: flex;
  height: 3rem;
  width: auto;
}
</style>