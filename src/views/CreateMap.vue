<template>
  <div class="maps_create-wrapper">
    <div class="input-block">
      <input
        placeholder="Название корневого элемента(карты)"
        id="root"
        name="root"
        type="text"
        v-model="title"
        v-on:keyup.enter="createChild($event)"
      />
    </div>
    <b-button @click="saveMap" class="save-button" variant="success"
      >Сохранить</b-button
    >
  </div>
</template>

<script>
import { createChildFunction } from "../utils/createChild";
import { saveMapDB } from "../utils/mapAPI";

export default {
  name: "CreateMap",
  data() {
    return {
      children: [],
      title: "",
    };
  },
  methods: {
    createChild(event) {
      createChildFunction(event, this.children);
    },
    async saveMap() {
      await this.$store.dispatch("pushMap", {
        id: this.$store.state.maps.length + 1,
        title: this.title,
        children: this.children,
      });
      return saveMapDB(this.getUserId, this.getMaps);
    },
  },
  computed: {
    getUserId: function () {
      return this.$store.getters.getUser.user.id;
    },
    getMaps: function () {
      return this.$store.getters.getMaps[0];
    },
  },
};
</script>

<style lang="scss" scoped>
.maps_create-wrapper {
  height: 100vh;
  width: 100%;
  padding: 71px 0 0;
  position: relative;
  .save-button {
    position: absolute;
    left: -200px;
    top: 0px;
  }
  #root {
    position: absolute;
    background: #00aaff;
    border: 2px solid #4dc4ff;
    outline: none;
    border-radius: 15px 15px 0 15px;
    padding: 13px 15px;
    color: #ffffff;
    font-size: 16px;
    font-weight: 600;
    left: -275px;
    top: 45vh;
    &::placeholder {
      color: #e9ecef;
      opacity: 0.8;
    }
  }
}
</style>
