<template>
  <div class="contact">
    <div class="contact-content"></div>
  </div>
</template>

<script>
export default {
  name: 'Contact'
}
</script>

<style lang="scss" scoped>
.contact {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(34, 36, 56);
  &-content {
    background: rgb(34, 36, 56);
    filter: brightness(0.9);
    width: 80%;
    height: 80%;
    margin: auto;
    padding: 13px;
    border-radius: 14px;
    position: relative;
  }
}
</style>