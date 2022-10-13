<template>
  <div ref="component" class="footer-subsection-2">
    <Navigation/>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";

export default {
  name: "FooterSubsection2",
  components: {
    Navigation,
  },
}
</script>

<style scoped lang="scss">
.footer-subsection-2 {
  nav :deep(ul) {
    display: flex;
    flex-flow: column nowrap;
    padding: unset;
  }
}
</style>