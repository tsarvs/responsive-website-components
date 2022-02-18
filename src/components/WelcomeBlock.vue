<template>
  <div ref="component" class="welcome-block">
    <div class="welcome-content">
      <div class="welcome-left">
        <h1 class="welcome-title">Pretty cool stuff, right...</h1>
        <div class="welcome-title-underline"/>
      </div>
      <div class="welcome-right">
        <p>
          This template is a cool and relatively new (to me, at least) way to write websites! You should <a href="https://github.com/tsarvs/responsive-website-components" target="_blank" rel="noopener noreferrer">download it off of github</a> and see for yourself how easy it can be to build something so powerful yet flexible. By harnessing the capabilities of Vue, SCSS, flexbox, and some web technology standards, we can write elegant, efficient code to create the building blocks for our website front end as well as handle some back-end stuff as well.
        </p>
        <p>
          I've written a handful of websites before, but this has been probably one of the cleanest approaches to making websites that I have done yet.
        </p>
      </div>
    </div>
    <div class="welcome-bottom">
      <h3>Join me, web development is fun again!</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WelcomeBlock',
};
</script>

<style scoped lang="scss">
.welcome-block {
  height: var(--block-height-medium);
  background-color: var(--block-color-light);
  color: var(--shades-dark);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;

  .welcome-content {
    display: flex;
    justify-content: center;
    align-items: center;
    .welcome-left, .welcome-right{
      width: 30%;
      margin: .5rem;
    }
    .welcome-left {
      display: flex;
      flex-flow: column nowrap;
      align-items: flex-end;
      justify-content: center;

      font-family: var(--display-font-family);

      .welcome-title {
        text-align: right;
      }

      .welcome-title-underline{
        height: .1rem;
        width: 10rem;
        background-color: var(--shades-dark);
      }
    }
  }
}
</style>