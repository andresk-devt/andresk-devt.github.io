<template>
  <div class="contact">
    <div class="contact-content">
      <div class="contact-content-container">
        <div class="contact-container">
          <div class="contact-form">
            <h3 class="contact-form__title">{{ $t("contactMe.contact") }}</h3>
            <hr class="contact-form__under" />
            <input
              type="text"
              class="input-container"
              :placeholder="$t('contactMe.email')"
            />
            <textarea
              type="text"
              class="input-container input-container__message"
              :placeholder="$t('contactMe.message')"
            />
            <div class="contact-button-container">
              <button class="contact-button-container__button">
                {{ $t("contactMe.stayInContact") }}
                <ion-icon name="caret-forward-outline"></ion-icon>
              </button>
            </div>
          </div>
          <div class="contact-social-list">
            <div class="contact-social-list__item">
              <ion-icon name="logo-linkedin"></ion-icon>
            </div>
            <div class="contact-social-list__item">
              <ion-icon name="logo-skype"></ion-icon>
            </div>
            <div class="contact-social-list__item">
              <ion-icon name="logo-github"></ion-icon>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
};
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
    &-container {
      padding: 20px;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
}
.contact-title {
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
.contact-container {
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: start;
  height: 90%;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
.contact-social-list {
  width: 50%;
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: center;
  align-items: center;
  @media (max-width: 800px) {
    width: 100%;
    height: auto;
    margin-top: 40px;
  }
  &__item {
    margin: auto 20px;
    color: #ecf0f1;
    border-radius: 50%;
    height: 50px;
    width: 50px;
    background: #282c3e;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
}
.contact-form {
  width: 50%;
  @media (max-width: 800px) {
    width: 100%;
  }
  justify-content: start;
  display: flex;
  flex-direction: column;
  &__title {
    font-family: "Arial";
    margin: 10px 0px;
    color: rgb(246, 71, 85);
    font-size: 2rem;
    font-weight: 600;
  }
  &__under {
    width: 60px;
    margin: 0;
    border: 2px solid rgb(246, 71, 85);
    margin-bottom: 10px;
  }
}
.input-container {
  padding: 15px;
  margin: 10px 0px;
  background: #282c3e;
  border: none;
  color: white;
  outline: none;
  font-family: "Arial";
  &__message {
    resize: none;
    height: 50px;
  }
}
.contact-button-container {
  text-align: end;
  &__button {
    cursor: pointer;
    border-radius: 13px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 180px;
    color: white;
    height: 38px;
    font-size: 1rem;
    font-weight: bold;
    border: none;
    margin: 20px auto;
    background: rgb(246, 71, 85);
  }
}
ion-icon {
  font-size: 1.4rem;
}
</style>
