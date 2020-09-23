<template>
  <div id="app">
    <router-view />
    <tab-bar :list="list"></tab-bar>
  </div>
</template>

<script>
import tabbar from "./components/tabbar.vue";
export default {
  name: "App",
  data() {
    return {
      list: [
        { title: '首页' },
        { title: '商城' },
        { title: '我的' },
        ],
    };
  },
  conponents: {
    tabbar,
  },
};
</script>

<style>
</style>
