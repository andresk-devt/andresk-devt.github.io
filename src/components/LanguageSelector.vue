<template>
  <div class="language-selector">
    <input type="radio" v-model="$i18n.locale" value="es">
    <input type="radio" v-model="$i18n.locale" value="en">
  </div>
</template>

<script>
export default {
  name: "LanguageSelector",
  watch: {
    "$i18n.locale": (selectedLanguage) => {
      localStorage.setItem("selected-language", selectedLanguage);
      console.log('hola a todos', selectedLanguage);
    }
  }
}
</script>

<style lang="scss" scoped></style>