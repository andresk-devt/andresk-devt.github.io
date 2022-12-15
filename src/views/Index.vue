<template>
  <main class="main-container">
    <SectionSelector class="section-selector" :selectedComponent="'Home'"/>
    <Home />
    <Skill />
    <Project />
    <Contact />
  </main>
</template>

<script>
import SectionSelector from "@/components/sectionSelector.vue";
import Home from "./home/Index.vue";
import Skill from "./skill/Index.vue";
import Project from "./project/Index.vue";
import Contact from "./contact/Index.vue";

export default {
  components: {
    SectionSelector,
    Home,
    Skill,
    Project,
    Contact
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