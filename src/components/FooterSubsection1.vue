<template>
  <div class="footer-subsection-1" ref="component">
    <SiteLogo class="footer-logo"/>
    <div>
      <text class="footer-subsection-1-main-text">www.tomsarver.dev</text>
      <br>
      <text class="footer-subsection-1-subtext">Written by: Tom Sarver</text>
    </div>
  </div>
</template>

<script>
import SiteLogo from "@/components/SiteLogo";

export default {
  name: "FooterSubsection1",
  components: {
    SiteLogo,
  }
}
</script>

<style scoped lang="scss">
.footer-subsection-1 {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  gap: 0 .5rem;

  .footer-logo ::v-deep(img){
    scale: .61;
  }

  .footer-subsection-1-subtext {
    font-family: var(--display-font-family);
  }
}
</style>