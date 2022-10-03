<!-- @format -->

<template>
  <div ref="component" class="footer-container">
    <div class="footer-row-A">
      <div class="footer-subsection">
        <FooterSubsection1/>
      </div>
      <div class="footer-subsection">
        <FooterSubsection2/>
      </div>
      <div class="footer-subsection">
        <FooterSubsection3/>
      </div>
      <div class="footer-subsection">
        <FooterSubsection4/>
      </div>
    </div>
    <div class="footer-row-B">
      <div class="footer-subsection">
        <FooterSubsection5/>
      </div>
    </div>
  </div>
</template>

<script>
import FooterSubsection1 from "@/components/FooterSubsection1";
import FooterSubsection2 from "@/components/FooterSubsection2";
import FooterSubsection3 from "@/components/FooterSubsection3";
import FooterSubsection4 from "@/components/FooterSubsection4";
import FooterSubsection5 from "@/components/FooterSubsection5";

export default {
  name: 'SiteFooter',
  components: {
    FooterSubsection1,
    FooterSubsection2,
    FooterSubsection3,
    FooterSubsection4,
    FooterSubsection5
  },
};
</script>

<style scoped lang="scss">
.footer-container{
  background-color: var(--site-menu-color);
  color: white;

  display: flex;
  flex-flow: column nowrap;
  padding: 2.5rem;

  .footer-subsection {
    width: 100%;
  }

  .footer-row-A, .footer-row-B{
    align-self: center;
    display: flex;
    flex-flow: row;

    //width: calc(100% - 5em);
    width: 100%;
  }
}
</style>