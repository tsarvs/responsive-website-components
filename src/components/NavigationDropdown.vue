<template>
  <div ref="component">
    <button class="dropbtn">{{ this.$props.text }}
      <i class="fa fa-caret-down"/>
    </button>
    <div class="dropdown-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavigationDropdown', props: {
    text: {
      type: String, require: true,
    }, href: {
      type: String,
    }
  },
};
</script>

<style scoped lang="scss">
.component {
  float: left;
  overflow: hidden;

  .dropbtn {
    font-size: 1rem;
    border: none;
    outline: none;
    color: white;
    padding: 0;
    background-color: inherit;
    font-family: inherit;
    margin: 0;
  }
}
</style>