<template>
  <div class="skills">
    <div class="skills-content">
      <div class="skills-content-container">
        <div class="skills-title">
          <span>Services</span>
          <h1 class="skills-title__text">Skills-Set</h1>
          <hr class="skills-title__under" />
        </div>
        <main class="skills-main-content">
          <div class="skills-container-list">
            <div class="skills-container-list__item">
              <div class="skill-container">
                <ion-icon name="logo-github"></ion-icon>
                <div class="skill-container__title">
                  <span>Git Version Control</span>
                </div>
                <div class="skill-container__description">
                  <span
                    >Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Non incidunt dolor, voluptate ab ad ipsum. Magnam, ipsum
                    recusandae et dolore soluta maxime.</span
                  >
                </div>
              </div>
            </div>
            <div class="skills-container-list__item">
              <div class="skill-container">
                <ion-icon name="globe-outline"></ion-icon>
                <div class="skill-container__title">
                  <span>Web Development</span>
                </div>
                <div class="skill-container__description">
                  <span
                    >Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Non incidunt dolor, voluptate ab ad ipsum. Magnam, ipsum
                    recusandae et dolore soluta maxime.</span
                  >
                </div>
              </div>
            </div>
            <div class="skills-container-list__item">
              <div class="skill-container">
                <ion-icon name="logo-angular"></ion-icon>
                <div class="skill-container__title">
                  <span>Front-End Development</span>
                </div>
                <div class="skill-container__description">
                  <span
                    >Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Non incidunt dolor, voluptate ab ad ipsum. Magnam, ipsum
                    recusandae et dolore soluta maxime.</span
                  >
                </div>
              </div>
            </div>
            <div class="skills-container-list__item">
              <div class="skill-container">
                <ion-icon name="phone-portrait-outline"></ion-icon>
                <div class="skill-container__title">
                  <span>Responsive Design</span>
                </div>
                <div class="skill-container__description">
                  <span
                    >Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Non incidunt dolor, voluptate ab ad ipsum. Magnam, ipsum
                    recusandae et dolore soluta maxime.</span
                  >
                </div>
              </div>
            </div>
            <div class="skills-container-list__item">
              <div class="skill-container">
                <ion-icon name="server-outline"></ion-icon>
                <div class="skill-container__title">
                  <span>Back-End Development</span>
                </div>
                <div class="skill-container__description">
                  <span
                    >Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Non incidunt dolor, voluptate ab ad ipsum. Magnam, ipsum
                    recusandae et dolore soluta maxime.</span
                  >
                </div>
              </div>
            </div>
            <div class="skills-container-list__item">
              <div class="skill-container">
                <ion-icon name="logo-amazon"></ion-icon>
                <div class="skill-container__title">
                  <span>AWS</span>
                </div>
                <div class="skill-container__description">
                  <span
                    >Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Non incidunt dolor, voluptate ab ad ipsum. Magnam, ipsum
                    recusandae et dolore soluta maxime.</span
                  >
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skills",
  data() {
    return {
      obj: {
        icon: "logo-github",
        title: "Git Version Control",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.skills {
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
.skills-title {
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
.skills-main-content {
  height: 90%;
  margin: 15px auto;
  width: 100%;
  overflow-y: scroll;
}
.skills-container-list {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30%, 4fr));
  gap: 20px;
  grid-template-rows: 50% 50%;
  @media (max-width: 800px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 4fr));
    grid-template-rows: 300px;
  }
  &__item {
    height: 100%;
    background: #282c3e;
  }
}
ion-icon {
  font-size: 3rem;
  color: rgb(246, 71, 85);
}
::-webkit-scrollbar {
  display: none;
}
</style>
