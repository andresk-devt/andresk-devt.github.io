<template>
  <div class="step-bar">
    <ul class="step-bar-content">
      <li
        class="step-bar-content__item"
      >
        .
      </li>
      <li
        class="step-bar-content__item is-active"
      >
        .
      </li>
      <li
        class="step-bar-content__item"
      >
        .
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "StepBar",
  props: {
    componentActive: String,
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.step-bar {
  &-content {
    position: relative;
    padding-left: 45px;
    list-style: none;
    &::before {
      display: inline-block;
      content: "";
      position: absolute;
      top: 20px;
      left: 17px;
      width: 10px;
      height: 77%;
      border-left: 3px solid rgb(62, 65, 84);
    }
    &__item {
      color: transparent;
      position: relative;
      counter-increment: list;
      margin: 50px auto;
      cursor: pointer;
      &::before {
        display: inline-block;
        content: "";
        position: absolute;
        left: -30px;
        height: 100%;
        width: 10px;
      }
      &::after {
        content: "";
        display: inline-block;
        position: absolute;
        top: 0;
        left: -37px;
        width: 16px;
        height: 16px;
        border: 3px solid rgb(62, 65, 84);
        border-radius: 50%;
        background-color: rgba(62, 65, 84, 0.402);
      }
    }
  }
}
.is-active {
  &::after {
    content: "";
    border: 2px solid rgb(62, 65, 84);
    background-color: rgb(246, 71, 85);
  }
}
</style>
