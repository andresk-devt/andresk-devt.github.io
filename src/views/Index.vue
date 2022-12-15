<template>
  <main class="main-container">
    <SectionSelector class="section-selector" :selectedComponent="'Home'"/>
  </main>
</template>

<script>
import SectionSelector from "@/components/sectionSelector.vue";

export default {
  components: {
    SectionSelector
  }
}
</script>

<style lang="scss" scoped>
.main-container {
  height: 100%;
  width: 100%;
}
.section-selector {
  position: fixed;
  top: 35%;
  left: 4%;
  @media (max-width: 800px) {
    left: 2%;
  }
}
</style>