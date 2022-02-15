<!-- @format -->

<template>
  <div ref="component">
    <router-link :to="$props.href" class="navigation-hyperlink" @click="logClick($props.href)">{{this.$props.text}}</router-link>
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
    }
  },
  methods:{
    async logClick(href){
      console.log('href: ', href)
    },
  },
};
</script>

<style scoped lang="scss">
.navigation-hyperlink {
  text-decoration: none;
  color: var(--site-menu-font-color);
  cursor: pointer;

  &:hover{
    color: var(--primary-color);
    text-decoration-line: underline;
  }
}
</style>