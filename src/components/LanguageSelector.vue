<template>
  <div class="language-selector">
    <div class="selected-language" @click="toggleDropdown">
      <img :src="imageURL(this.selector.selectedLanguageFlag.flag)" alt="" />
      <div class="dropdown-arrow"  :class="isOpen ? 'is-open' : ''">
        <ion-icon name="chevron-forward-outline"></ion-icon>
      </div>
    </div>
    <div class="language-selector-list" v-if="isOpen" @click="changeLanguage()">
      <img :src="imageURL(this.selector.optionLanguageFlag.flag)" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "LanguageSelector",
  data() {
    return {
      isOpen: false,
      selector: {
        selectedLanguageFlag: { flag: "usa", value: 'en' },
        optionLanguageFlag: { flag: "colombia", value: 'es' }
      }
    };
  },
  created() {
    if (localStorage.getItem("selected-language")) {
      if (localStorage.getItem("selected-language") === 'es') {
        this.selector.selectedLanguageFlag = { flag: "colombia", value: 'es' };
        this.selector.optionLanguageFlag = { flag: "usa", value: 'en' };
      } else if (localStorage.getItem("selected-language") === 'en') {
        this.selector.selectedLanguageFlag = { flag: "usa", value: 'en' };
        this.selector.optionLanguageFlag = { flag: "colombia", value: 'es' };
      }
    }
  },
  watch: {
    "$i18n.locale": (selectedLanguage) => {
      localStorage.setItem("selected-language", selectedLanguage);
      console.log('cambio el lenguaje');
    },
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    changeLanguage() {
      const { selectedLanguageFlag } = this.selector;
      const { optionLanguageFlag } = this.selector;
      this.selector.selectedLanguageFlag = optionLanguageFlag;
      this.selector.optionLanguageFlag = selectedLanguageFlag;
      this.$i18n.locale = this.selector.selectedLanguageFlag.value;
      this.isOpen = false;
    },
    imageURL(flag) {
      return `${require(`../assets/flags/${flag}.png`)}`;
    }
  },
};
</script>

<style lang="scss" scoped>
.language-selector {
  display: flex;
  flex-direction: column;
  background: rgb(34, 36, 56);
  filter: brightness(.9);
  border-radius: 7px;
  padding: 5px;
  &-list {
    cursor: pointer;
    &:hover {
      // background: rgba(19, 20, 31, 0.493);
    }
  }
}
.selected-language {
  display: flex;
  cursor: pointer;
}
.dropdown-arrow {
  // cursor: pointer;
}
ion-icon {
  color: white;
}
.is-open ion-icon {
  transform: rotate(90deg);
  transition: 0.3s all;
}
.is-closed ion-icon {
  transform: rotate(0deg);
  transition: 0.3s all;
}
</style>
