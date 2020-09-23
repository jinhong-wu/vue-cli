<template id="tabbar">
  <div class="footer">
      <div class="item" v-for="item in list">
        <slot></slot>
      </div>
  </div>
</template>

<script>
export default {
  template: "#tabbar",
  props: ["list"],
};
</script>

<style scoped>
.footer {
  position: fixed;
  display: inline-flex;
  width: 100%;
  height: 60px;
  bottom: 0;
  left: 0;
  flex-wrap: wrap;
}
.footer .item {
  flex: 1;
}
</style>