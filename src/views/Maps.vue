<template>
  <div class="maps">
    <h1 class="page-title">Maps</h1>
    <ul>
      <li></li>
    </ul>
  </div>
</template>

<script>
import { getAllMaps } from "../utils/mapAPI";
import store from "../store";

export default {
  name: "Maps",
  async mounted() {
    const maps = await getAllMaps(this.user.id);

    console.log(maps);
  },
  computed: {
    user: () => store.getters.getUser?.user,
  },
};
</script>

<style scoped>
.page-title {
  font-weight: 700;
  font-size: 36px;
  line-height: 47px;
  color: #181717;
  text-align: left;
}
</style>
