<template>
  <ul class="section-selector">
    <li
      v-for="item in items"
      :key="item.name"
      :class="selectedComponent === item.name ? 'active' : ''"
      class="section-selector__item"
      @click="scrollCard(item.name)"
    >
      <ion-icon :name="item.icon" title></ion-icon>
    </li>
    <LanguageSelector />
  </ul>
</template>

<script>
import LanguageSelector from "./LanguageSelector.vue";

export default {
  name: "SectionSelector",
  props: {
    selectedComponent: String,
  },
  components: {
    LanguageSelector
  },
  data() {
    return {
      items: [
        { name: "home", icon: "home-outline", isSelected: false },
        { name: "skills", icon: "flash-outline", isSelected: false },
        { name: "projects", icon: "albums-outline", isSelected: false },
        { name: "contact", icon: "mail-outline", isSelected: false },
      ],
    };
  },
  methods: {
    scrollCard(ref) {
      this.$emit("animatedScrollCard", ref);
    },
  },
};
</script>

<style lang="scss">
.section-selector {
  font-family: "Arial";
  background: rgb(34, 36, 56);
  filter: brightness(0.7);
  color: white;
  display: inline-block;
  border-radius: 13px;
  text-align: center;
  z-index: 10;
  &__item {
    padding: 10px;
    cursor: pointer;
  }
}

.active {
  color: rgb(246, 71, 85);
}

ion-icon {
  font-size: 24px;
}
</style>
