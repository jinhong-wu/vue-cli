<template>
  <div class="footer">
    <div class="item" v-for="item in list">
      <router-link :to="item.path">{{ item.title }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabbar",
  props: {
    list: Array,
  },
};
</script>

<style scoped lang="less">
.footer {
  position: fixed;
  display: inline-flex;
  width: 100%;
  height: 60px;
  bottom: 0;
  left: 0;
  flex-wrap: wrap;
  box-shadow: 0px -2px 6px #ededed;
  .item {
    flex: 1;
    text-align: center;
    a {
      text-decoration: none;
      color: #5b5a5a;
      line-height: 60px;
    }
  }
}
</style>
