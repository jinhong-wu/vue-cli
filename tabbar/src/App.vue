<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <tabbar :list="list"></tabbar>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      list: [
        { title: "首页", path: "/home" },
        { title: "商城", path: "/store" },
        { title: "我的", path: "/profile" },
      ],
    };
  },
  components: {
    tabbar: () => import("./components/tabbar"),
  },
};
</script>

<style></style>
