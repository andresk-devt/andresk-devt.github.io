<template>
  <div class="card">
    <div class="card-container">
      <ion-icon :name="skill.icon"></ion-icon>
      <div class="card-container__title">
        <span>{{ skill.title }}</span>
      </div>
      <div class="card-container__description">
        <span
          >{{ skill.description }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    skill: Object
  }
};
</script>

<style lang="scss" scoped>
.card-container {
  padding: 20px;
  font-family: 'Arial';
  &__title {
    font-size: 1rem;
    color: white;
    font-weight: bold;
    margin: 20px 0px 10px 0px;
  }
  &__description {
    font-size: .9rem;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color: #ecf0f1;
  }
}
ion-icon {
  font-size: 3rem;
  color: rgb(246, 71, 85);
}
</style>
