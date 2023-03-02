<template>
  <div class="projects">
    <div class="projects-content">
      <div class="projects-content-container">
        <div class="projects-title">
          <span>{{ $t('projects.featured') }}</span>
          <h1 class="projects-title__text">{{ $t('projects.projects') }}</h1>
          <hr class="projects-title__under" />
        </div>
        <main class="projects-main-content"></main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Projects",
};
</script>

<style lang="scss" scoped>
.projects {
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
    &-container {
      padding: 20px;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      overflow: auto;
    }
  }
}
.projects-title {
  font-family: "Arial";
  width: 100%;
  span {
    color: white;
    font-size: 0.8rem;
  }
  &__text {
    margin-top: 10px;
    color: rgb(246, 71, 85);
    font-size: 2rem;
    font-weight: 600;
  }
  &__under {
    width: 60px;
    margin: 0;
    border: 2px solid rgb(246, 71, 85);
    margin-top: 10px;
  }
}
.projects-main-content {
  height: 90%;
  margin: 15px auto;
  width: 100%;
}
</style>
