<template>
  <main class="main-container">
    <LanguageSelector class="language-selector" />
    <SectionSelector class="section-selector" :selectedComponent="selectedComponent" @animatedScrollCard="animatedScrollCard" />
    <Home ref="home" id="home" @animatedScrollCard="animatedScrollCard" />
    <Skill ref="skills" id="skills" />
    <Project ref="projects" id="projects" />
    <Contact ref="contact" id="contact" />
  </main>
</template>

<script>
import SectionSelector from "@/components/sectionSelector.vue";
import Home from "./home/Index.vue";
import Skill from "./skill/Index.vue";
import Project from "./project/Index.vue";
import Contact from "./contact/Index.vue";
import LanguageSelector from "../components/LanguageSelector.vue";

export default {
  components: {
    SectionSelector,
    Home,
    Skill,
    Project,
    Contact,
    LanguageSelector
  },
  data() {
    return {
      selectedComponent: 'home',
      componentPosition: null
    }
  },
  mounted() {
    this.onScroll();
    window.addEventListener("scroll", this.onScroll);
  },
  methods: {
    animatedScrollCard(refName) {
      this.selectedComponent = this.$refs[refName]?.$el.id;
      const element = this.$refs[refName].$el;
      const position = element.offsetTop;
      window.scrollTo({
        top: position,
        left: 0,
        behavior: "smooth",
      });
    },
    onScroll() {
      this.calculatePositionOfBox();
    },
    calculatePositionOfBox() {
      const home = this.$refs['home'].$el.getBoundingClientRect().top;
      const skills = this.$refs['skills'].$el.getBoundingClientRect().top;
      const projects = this.$refs['projects'].$el.getBoundingClientRect().top;
      const contact = this.$refs['contact'].$el.getBoundingClientRect().top;
      this.componentsPosition = {
        home,
        skills,
        projects,
        contact
      }
      Object.entries(this.componentsPosition).forEach(([key, value]) => {
        if (value >= -760 && value <= 0) {
          this.selectedComponent = key;
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.main-container {
  height: 100%;
  width: 100%;
}
.language-selector {
  position: fixed;
  top: 1%;
  right: 1%;
  z-index: 10;
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