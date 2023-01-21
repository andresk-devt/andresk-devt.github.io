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
            <div
              class="skills-container-list__item"
              v-for="item in skills"
              :key="item.title"
            >
              <Card :skill="item" />
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "./components/Card.vue";

export default {
  name: "Skills",
  components: {
    Card,
  },
  data() {
    return {
      skills: [
        {
          icon: "logo-github",
          title: "Git Version Control",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nonincidunt dolor, voluptate ab ad ipsum. Magnam, ipsum recusandae etdolore soluta maxime.",
        },
        {
          icon: "logo-angular",
          title: "Front-End Development",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nonincidunt dolor, voluptate ab ad ipsum. Magnam, ipsum recusandae etdolore soluta maxime.",
        },
        {
          icon: "server-outline",
          title: "Back-End Development",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nonincidunt dolor, voluptate ab ad ipsum. Magnam, ipsum recusandae etdolore soluta maxime.",
        },
        {
          icon: "globe-outline",
          title: "Web Development",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nonincidunt dolor, voluptate ab ad ipsum. Magnam, ipsum recusandae etdolore soluta maxime.",
        },
        {
          icon: "logo-amazon",
          title: "AWS",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nonincidunt dolor, voluptate ab ad ipsum. Magnam, ipsum recusandae etdolore soluta maxime.",
        },
        {
          icon: "phone-portrait-outline",
          title: "Responsive Design",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nonincidunt dolor, voluptate ab ad ipsum. Magnam, ipsum recusandae etdolore soluta maxime.",
        },
      ],
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
  height: 90%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30%, 4fr));
  gap: 20px;
  grid-template-rows: 50% 50%;
  @media (max-width: 800px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 4fr));
    grid-template-rows: repeat(6, 300px);
    height: 95%;
    overflow: auto;
  }
  &__item {
    height: 100%;
    background: #282c3e;
  }
}
::-webkit-scrollbar {
  display: none;
}
</style>
