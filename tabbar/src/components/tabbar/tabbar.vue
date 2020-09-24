<template>
  <div id="tab-bar">
    <div
      class="tab-bar-item"
      :class="{ active: $route.path.indexOf(item.path) > -1 }"
      v-for="(item, index) in list"
      :key="index"
    >
      <router-link :to="item.path">{{ item.title }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabbar",
  props: {
    list: Array
  }
};
</script>

<style scoped lang="less">
@height: 49px;
#tab-bar {
  position: fixed;
  display: inline-flex;
  width: 100%;
  height: @height;
  bottom: 0;
  left: 0;
  right: 0;
  flex-wrap: wrap;
  box-shadow: 0px 0px 4px #dadada;
  background: #f3f3f2;
  .tab-bar-item {
    flex: 1;
    text-align: center;
    a {
      text-decoration: none;
      color: #5b5a5a;
      line-height: @height;
    }
  }
  .tab-bar-item.active > a {
    color: #2a6ed4;
  }
}
</style>
