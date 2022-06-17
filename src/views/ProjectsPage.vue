<template>
  <div ref="view">
    <hello-world3-d/>
  </div>
</template>

<script>
import HelloWorld3D from '@/components/threejs-doodles/HelloWorld3D';

export default {
  name: 'ProjectsPage',
  components : {
    HelloWorld3D,
  },
};
</script>

<style scoped lang="scss"></style>