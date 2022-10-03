<template>
  <div ref="component" class="footer-subsection-5">
    <FooterCopyright/>
  </div>
</template>

<script>
import FooterCopyright from "@/components/threejs-doodles/FooterCopyright";

export default {
  name: "FooterSubsection5",
  components: {FooterCopyright}
}
</script>

<style scoped>
.footer-subsection-5 {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
}
</style>