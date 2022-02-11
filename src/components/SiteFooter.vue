<!-- @format -->

<template>
  <div ref="component" class="footer-container">Hello, world! (Footer)</div>
</template>

<script>
export default {
  name: 'SiteFooter',
};
</script>

<style scoped lang="scss">
.footer-container{
  height: 60px;
  background-color: var(--site-menu-color);
  color: white;
}
</style>