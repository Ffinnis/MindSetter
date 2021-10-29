<template>
  <input
    class="map-child"
    :id="parent + '_' + 'child' + '_' + index"
    type="text"
    v-on:keyup.enter="createChild($event)"
  />
</template>

<script>
import { createChildFunction } from "../../utils/createChild";

export default {
  name: "Children",
  props: {
    parent: String,
    index: Number,
  },
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

<style scoped>
.map-child {
  position: absolute;
  background: #ffffff;
  border: 2px solid #e0e0e0;
  outline: none;
  border-radius: 15px 15px 15px 15px;
  padding: 13px 15px;
  color: #181818;
  font-size: 16px;
  font-weight: 600;
}
</style>
