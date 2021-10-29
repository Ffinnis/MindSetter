<template>
  <div v-if="isAuth" class="app-container">
    <nav class="app-navigation">
      <router-link to="/"> Главная </router-link>
      <router-link to="/maps"> Мои карты </router-link>
      <router-link to="/create"> Создать карту </router-link>
    </nav>
    <div class="user-profile">
      <div class="user-avatar">
        <img src="/" alt="" />
      </div>
      <div class="user-info">
        <h4 v-if="user">{{ user.username }}</h4>
      </div>
      <div class="logout">
        <b-icon icon="box-arrow-right" />
      </div>
    </div>
  </div>
  <Auth v-else />
</template>

<script>
import Auth from "./Auth";
import store from "../store";
export default {
  name: "Header",
  components: { Auth },
  computed: {
    isAuth: () => store.getters.getIsAuth,
    user: () => store.getters.getUser?.user,
  },
};
</script>

<style scoped></style>
