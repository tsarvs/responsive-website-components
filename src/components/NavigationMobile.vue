<template>
  <div ref="component">
    <div ref="hamburger" class="hamburger" @click="toggleHamburger()">
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
  methods: {
    async toggleHamburger(){
      if (this.$refs.hamburger.classList.contains('hamburger-active')) {
        this.$refs.hamburger.classList.remove('hamburger-active');
      }
      else
      {
        this.$refs.hamburger.classList.add('hamburger-active');
      }
    }
  },
  components: {
    Navigation
  },
};
</script>

<style scoped lang="scss">
.hamburger{
  display: flex;
  flex-flow: column;

  width: 2.5rem;

  cursor: pointer;

  .hamburger-patty{
    height: .35rem;
    width: 100%;

    margin: .2rem 0;
    border-radius: 1rem;

    background-color: white;
  }
}

.hamburger-active{
  .hamburger-patty{
    transition:  all .35s ease;

    &:nth-child(1){
      transform: translateY(.75rem) translateX(0) rotate(45deg);
    }
    &:nth-child(2){
      opacity: 0;
    }
    &:nth-child(3){
      transform: translateY(-.75rem) translateX(0) rotate(-45deg);
    }
  }
}

.mobile-nav-wrapper{
  position: fixed;
}
</style>