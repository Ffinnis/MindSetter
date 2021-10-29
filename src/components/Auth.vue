<template>
  <div class="registration">
    <div class="registration-popup">
      <div class="input-wrapper">
        <label class="label" for="name">Введите ваше имя</label>
        <input v-model="name" name="name" id="name" class="input" type="text" />
      </div>
      <div class="input-wrapper">
        <label class="label" for="password">Введите ваш пароль</label>
        <input
          v-model="pass"
          name="password"
          id="password"
          class="input"
          type="password"
        />
      </div>
      <div class="button-wrapper">
        <b-button
          @click="register"
          size="lg"
          variant="outline-primary"
          class="button-register"
          >Зарегистроваться</b-button
        >
        <b-button
          @click="login"
          size="lg"
          variant="outline-danger"
          class="button-register"
          >Войти</b-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import { registration, login } from "../utils/userAPI";
export default {
  name: "Auth",
  data() {
    return {
      name: "",
      pass: "",
    };
  },
  methods: {
    async register() {
      let user = await registration(this.name, this.pass);

      if (user.status === 400) {
        alert(user.message);
      } else {
        await this.$store.dispatch("auth");
        await this.$store.dispatch("setUser", user.data);

        return localStorage.setItem("token", user.token);
      }
    },
    async login() {
      let user = await login(this.name, this.pass);

      if (user.status === 403) {
        alert(user.message);
      } else {
        await this.$store.dispatch("auth");
        await this.$store.dispatch("setUser", user.data);

        console.log(user.data);

        return localStorage.setItem("token", user.data.token);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.button-wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
  button {
    width: 100%;
  }
}
</style>
