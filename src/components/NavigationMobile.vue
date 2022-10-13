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
  animation-direction: alternate;

  display: flex;
  flex-flow: column;

  width: 2.5rem;

  cursor: pointer;

  &:hover {
    transition: .2s ease-in;
    transform: scale(1.05);
    opacity: .7;
  }

  .hamburger-patty{
    height: .35rem;
    width: 100%;

    margin: .2rem 0;
    border-radius: 1rem;

    background-color: var(--site-menu-hamburger-color);

    transition: .3s ease-in-out ;
  }
}

.hamburger-active{
  .hamburger-patty{
    &:nth-child(1){
      transform: translateY(.75rem) translateX(0) rotate(135deg);
    }
    &:nth-child(2){
      opacity: 0;
      transform: translateX(100%);
    }
    &:nth-child(3){
      transform: translateY(-.75rem) translateX(0) rotate(-135deg);
    }
  }
}

.menu-active{
  transform: translateX(-100%);
}

.mobile-nav-wrapper{
  position: fixed;

  top: 80px;
  left: 100vw;

  background-color: var(--site-menu-color);
  opacity: .6;

  :deep(ul) {
    display: flex;
    flex-flow: column nowrap;

    justify-content: space-around;

    padding: 0;
    margin: 0;

    li {
      width: 100vw;
      height: 3rem;

      padding: 0;

      display: flex;
      align-items: center;
      justify-content: center;

      &:hover{
        background-color: var(--site-menu--item-background-color-hover-mobile);
      }

    }
  }

}
</style>