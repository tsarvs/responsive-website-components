<template>
  <div ref="view">
    <three-dimensional-canvas/>
  </div>
</template>

<script>
import ThreeDimensionalCanvas from "@/components/ThreeDimensionalCanvas";

export default {
  name: 'ProjectsPage',
  components : {
    ThreeDimensionalCanvas,
  },
};
</script>

<style scoped lang="scss"></style>