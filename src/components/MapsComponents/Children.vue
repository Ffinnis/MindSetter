<template>
  <div class="input-block">
    <input
      class="map-child"
      :id="parent + '_' + 'child' + '_' + index"
      type="text"
      v-on:keyup.enter="createChild($event)"
      :style="{
        bottom: viewArea - lengthOfParentChild * 300 + 'px',
        left: leftOfParent + 400 + 'px',
      }"
      :ref="parent + '_' + 'child' + '_' + index"
    />
  </div>
</template>

<script>
import { createChildFunction } from "../../utils/createChild";
import arrowCreate from "arrows-svg";

export default {
  name: "Children",
  props: {
    parent: String,
    index: Number,
    leftOfParent: Number,
  },
  data() {
    return {
      children: [],
      lengthOfParentChild: this.index,
      nameOfComponent: this.parent + "_" + "child" + "_" + this.index,
    };
  },
  methods: {
    createChild(event) {
      createChildFunction(event, this.children);
    },
  },
  mounted() {
    const element = Object.values(this.$refs)[0];
    setTimeout(() => {
      console.log(element.parentNode.parentNode.childNodes[0]);
      const arrow = arrowCreate({
        from: {
          node: element.parentNode.parentNode.childNodes[0],
        },
        to: {
          node: element,
        },
      });
      console.log(arrow.node);
      document.body.appendChild(arrow.node);
    }, 0);
  },
  computed: {
    viewArea: () => window.innerHeight - 71 - 81 - 30,
    // 71 - padding, 81 - header, 30 - margin for object, (index * 300) - margin for child
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
