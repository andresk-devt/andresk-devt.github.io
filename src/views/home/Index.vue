<template>
  <div class="home">
    <div class="home-content">
      <div class="home-content-container">
        <div class="personal-content">
          <div class="personal-content__title">
            <p class="personal-content__text">{{ $t('home.gretting') }}</p>
            <div class="title-content">
              <ul class="title-list">
                <li class="title-list__item">Andres Camilo Gomez!</li>
                <li class="title-list__item">{{ $t('home.labor') }}</li>
              </ul>
            </div>
          </div>
          <div class="personal-content__information">
            <p>
              {{ $t('home.aboutMe') }}
            </p>
          </div>
          <button class="button-content" @click="scrollTo('skills')">{{ $t('home.skills') }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    scrollTo(ref) {
      this.$emit('animatedScrollCard', ref);
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
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
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
.personal-content {
  padding: 15px;
  padding-left: 28px;
  color: #ecf0f1;
  &__title {
    font-weight: 600;
    font-family: "Arial";
    overflow: hidden;
    height: 40px;
    color: white;
    font-size: 2rem;
    @media (max-width: 800px) {
      font-size: 1.5rem;
      display: flex;
      flex-direction: column;
      height: auto;
    }
  }
  &__text {
    display: block;
    float: left;
    margin: 0;
    display: flex;
    align-items: center;
    height: 100%;
  }
  &__information {
    margin: 20px auto;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color: white;
    font-size: 1rem;
    p {
      line-height: 20px;
    }
    @media (min-width: 800px) {
      font-size: .9rem;
      width: 60%;
      margin: 20px 0px;
    }
  }
}
.title-content {
  @media (max-width: 800px) {
    overflow: hidden;
    height: 40px;
  }
}
.title-list {
  margin-top: 0;
  padding-left: 110px;
  text-align: left;
  list-style: none;
  -webkit-animation-name: change;
  -webkit-animation-duration: 10s;
  -webkit-animation-iteration-count: infinite;
  animation-name: change;
  animation-duration: 10s;
  animation-iteration-count: infinite;
  @media (max-width: 800px) {
    padding-left: 0px;
  }
  &__item {
    line-height: 40px;
    margin: 0;
  }
}
.button-content {
  border: none;
  height: 35px;
  width: 100px;
  border-radius: 13px;
  background: rgb(246, 71, 85);
  color: white;
  cursor: pointer;
  &:hover {
    filter: brightness(0.9);
  }
}
@keyframes change {
  0%,
  12.66%,
  100% {
    transform: translate3d(0, 0, 0);
  }
  16.66%,
  29.32% {
    transform: translate3d(0, -50%, 0);
  }
  33.32%,
  45.98% {
    transform: translate3d(0, 0%, 0);
  }
  49.98%,
  62.64% {
    transform: translate3d(0, -50%, 0);
  }
  66.64%,
  79.3% {
    transform: translate3d(0, 0%, 0);
  }
  83.3%,
  95.96% {
    transform: translate3d(0, -50%, 0);
  }
}
</style>
