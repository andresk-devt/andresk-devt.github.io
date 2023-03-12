<template>
  <div class="tooltip-container">
    <transition name="fade" appear>
      <div class="tooltip" :class="$i18n.locale === 'en' ? 'en-style' : 'es-style'" v-if="showTooltip">{{ $t('contactMe.tooltip') }}</div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    showTooltip: Boolean
  },
}
</script>

<style lang="scss" scoped>
.tooltip-container {
  position: relative;
  display: inline-block;
}

.tooltip {
  position: absolute;
  bottom: 120%;
  left: 50%;
  transform: translateX(-80%) translateY(-100%);
  background-color: #555;
  color: #fff;
  padding: 8px 16px;
  border-radius: 5px;
  opacity: 0.8;
  z-index: 9999;
  font-size: 14px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande";
  white-space: nowrap;
}

.tooltip::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.en-style {
  transform: translateX(-80%) translateY(-100%);
}
.es-style {
  transform: translateX(-77%) translateY(-100%);
}
</style>