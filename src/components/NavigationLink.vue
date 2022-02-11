<!-- @format -->

<template>
  <div ref="component">
    <a :href="this.$props.href" class="navigation-hyperlink">{{this.$props.text}}</a>
  </div>
</template>

<script>
export default {
  name: 'NavigationLink',
  props: {
    text:{
      type: String,
      require: true,
    },
    href:{
      type: String,
      default: '#',
    }
  }
};
</script>

<style scoped lang="scss">
.navigation-hyperlink {
  text-decoration: none;
  color: var(--site-menu-font-color);

  &:hover{
    color: var(--primary-color);
    text-decoration-line: underline;
  }
}
</style>