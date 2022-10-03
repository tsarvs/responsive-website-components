<!-- @format -->

<template>
  <div ref="component" :class="['footer-container', { 'resized-footer' : resizedView }]">
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

const componentResizeWidth = 400;

export default {
  name: 'SiteFooter',
  components: {
    FooterSubsection1,
    FooterSubsection2,
    FooterSubsection3,
    FooterSubsection4,
    FooterSubsection5
  },
  async mounted(){
    new ResizeObserver((entries) => {
      this.resizedView = entries[0].contentRect.width <= componentResizeWidth;
    }).observe(this.$refs.component);
  },
  data: () => {
    return {
      resizedView: false,
    };
  }
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

    width: 100%;
  }
}
.resized-footer {
  .footer-row-A, .footer-row-B {
    flex-flow: column-reverse nowrap;
  }
}
</style>