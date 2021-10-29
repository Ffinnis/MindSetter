<template>
  <div class="maps_create-wrapper">
    <div class="input-block">
      <input
        placeholder="Название корневого элемента(карты)"
        id="root"
        name="root"
        type="text"
        v-on:keyup.enter="createChild($event)"
      />
    </div>
  </div>
</template>

<script>
import { createChildFunction } from "../utils/createChild";

export default {
  name: "CreateMap",
  data() {
    return {
      children: [],
    };
  },
  methods: {
    createChild(event) {
      createChildFunction(event, this.children);
    },
  },
};
</script>

<style lang="scss" scoped>
.maps_create-wrapper {
  padding: 71px 0 0;
  position: relative;
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
    left: 0;
    top: 45vh;
    &::placeholder {
      color: #e9ecef;
      opacity: 0.8;
    }
  }
}
</style>
