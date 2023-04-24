<template>
  <nav ref="component">
    <ul class="nav-desktop">
      <li>
        <NavigationLink text="Home" href="/"/>
      </li>
      <li>
        <NavigationDropdown text="Projects" href="/projects"/>
      </li>
      <li>
        <NavigationLink text="Contact" href="/contact"/>
      </li>
    </ul>
  </nav>
</template>

<script>
import NavigationLink from "@/components/NavigationLink";
import NavigationDropdown from "@/components/NavigationDropdown";

export default {
  name: 'NavigationDesktop',
  components: {
    NavigationLink,
    NavigationDropdown,
  },
};
</script>

<style scoped lang="scss">
.nav-desktop{
    display: flex;
    flex-direction: row;
    align-items: center;

    list-style-type: none;

  li {
    padding: 0 1rem;
  }
}
</style>