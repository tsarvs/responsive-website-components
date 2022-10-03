<!-- @format -->

<template>
  <div class="slide-content">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Slide',
};
</script>

<style scoped lang="scss">
.slide-content {
  height: 100%;
  width: 100%;
}
</style>