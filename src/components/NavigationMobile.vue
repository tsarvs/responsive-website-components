<template>
  <div ref="component">
    <div class="hamburger">
      <div class="hamburger-patty"></div>
      <div class="hamburger-patty"></div>
      <div class="hamburger-patty"></div>
    </div>
    <div class="mobile-nav-wrapper">
      <Navigation/>
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";

export default {
  name: 'NavigationMobile',
  components: {
    Navigation
  },
};
</script>

<style scoped lang="scss">
.hamburger{
  display: flex;
  flex-flow: column-reverse;

  height: 3rem;
  width: 2.5rem;

  .hamburger-patty{
    height: .35rem;
    width: 100%;

    margin: .2rem 0;
    border-radius: 1rem;

    &:nth-child(1){
      background-color: white;
    }
    &:nth-child(2){
      background-color: white;
    }
    &:nth-child(3){
      background-color: white;
    }
  }
}
</style>