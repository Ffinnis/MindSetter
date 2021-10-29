<template>
  <div id="app">
    <Header />
    <div v-if="isAuth" class="container">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
@import "~@/assets/scss/vendors/bootstrap-vue/index";
#app {
  font-family: IBM Plex Sans, sans-serif;
  text-align: center;
  color: #181717;
}

.registration {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .registration-popup {
    display: flex;
    flex-direction: column;
    padding: 30px 50px;
    background: #ffffff;
    border: 1px solid #e9ecef;
    border-radius: 13px;
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    .button-register {
      margin: 20px 0 0;
    }
    .input-wrapper {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      &:first-child {
        margin: 0 0 20px;
      }
    }
    .input {
      border-radius: 10px;
      padding: 8px 12px;
      background: #fff;
      font-size: 16px;
      font-weight: 500;
      border: 1px solid #d0d4d9;
      background: #fff;
    }
    .label {
      font-size: 18px;
      font-weight: 500;
    }
  }
}

.app-container {
  background: #ffeeee;
  padding: 17px 6.5% 17px 28%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  .user-profile {
    display: flex;
    align-items: center;
    .user-avatar {
      width: 47px;
      height: 47px;
      border-radius: 50%;
      background: #c4c4c4;
    }
  }
  .app-navigation {
    a {
      margin: 0 6vw 0 0;
      &:last-child {
        margin: 0;
      }
    }
  }
}
</style>
<script>
import store from "./store/index.js";
import Header from "./components/Header";
import { check } from "./utils/userAPI";

export default {
  components: { Header },
  computed: {
    isAuth: () => store.getters.getIsAuth,
  },
  async beforeCreate() {
    const checkUser = await check();

    if (checkUser) {
      console.log(checkUser);
      const user = {
        user: {
          username: checkUser.data.user.username,
          id: checkUser.data.user.id,
        },
      };
      await store.dispatch("auth");
      await store.dispatch("setUser", user);
    }
  },
};
</script>
