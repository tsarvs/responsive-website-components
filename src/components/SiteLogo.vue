<template>
  <div ref="component" class="site-logo">
    <a href="#">
      <img alt="logo" src="../assets/ts-logo-inverted-white-small.png">
    </a>
  </div>
</template>

<script>
export default {
  name: 'SiteLogo',
};
</script>

<style scoped lang="scss">
.site-logo{
  display: flex;
  height: 3rem;
  width: auto;

  a{
    &:hover{
      transition: .2s ease-in;
      transform: scale(1.05);
      opacity: .7;
    }
  }
}
</style>