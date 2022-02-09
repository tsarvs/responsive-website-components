<template>
  <div ref="component">
    <div ref="hamburger" class="hamburger" @click="toggleMenu()">
      <div class="hamburger-patty"></div>
      <div class="hamburger-patty"></div>
      <div class="hamburger-patty"></div>
    </div>
    <div ref="mobile-nav-wrapper" class="mobile-nav-wrapper">
      <Navigation/>
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";

export default {
  name: 'NavigationMobile',
  methods: {
    async toggleClass(refSelector, className){
      if (this.$refs[refSelector].classList.contains(className)) {
        this.$refs[refSelector].classList.remove(className);
      }
      else
      {
        this.$refs[refSelector].classList.add(className);
      }
    },
    async toggleHamburger(){
      await this.toggleClass('hamburger', 'hamburger-active');
    },
    async showMenu(){
      await this.toggleClass('mobile-nav-wrapper', 'menu-active');
    },
    async toggleMenu(){
      await this.toggleHamburger();
      await this.showMenu();
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

.menu-active{
  transition:  all .35s ease;

  transform: translateX(-100%);
}

.mobile-nav-wrapper{
  position: fixed;

  background-color: rgba(112, 128, 144, 0.6);

  /*ul {
    display: flex;
    flex-flow: column;
  }*/

}
</style>