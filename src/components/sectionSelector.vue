<template>
  <ul class="section-selector">
    <li
      v-for="item in items"
      :key="item.name"
      :class="selectedComponent === item.name ? 'active' : ''"
      class="section-selector__item"
    >
      <ion-icon :name="item.icon" title></ion-icon>
    </li>
  </ul>
</template>

<script>
export default {
  name: "SectionSelector",
  props: {
    selectedComponent: String,
  },
  data() {
    return {
      items: [
        { name: "Home", icon: "home-outline", isSelected: false },
        { name: "Skills", icon: "flash-outline", isSelected: false },
        { name: "Projects", icon: "albums-outline", isSelected: false },
        { name: "Contact", icon: "mail-outline", isSelected: false },
      ],
    };
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
