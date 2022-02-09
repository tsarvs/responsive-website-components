<template>
  <nav ref="component">
    <ul class="nav-desktop">
      <li>
        <NavigationLink text="Home"/>
      </li>
      <li>
        <NavigationLink text="Projects"/>
      </li>
      <li>
        <NavigationLink text="Blog"/>
      </li>
      <li>
        <NavigationLink text="Contact"/>
      </li>
    </ul>
  </nav>
</template>

<script>
import NavigationLink from "@/components/NavigationLink";

export default {
  name: 'NavigationDesktop',
  components: {
    NavigationLink,
  },
};
</script>

<style scoped lang="scss">
.nav-desktop{
    display: flex;
    flex-direction: row;

    list-style-type: none;

  li {
    padding: 0 1rem;
  }
}
</style>