<!-- 首页 -->
<script setup>
import { ref, reactive } from "vue";
import Header from "@/components/header/header.vue";
import Sidebar from "@/components/sidebar/sidebar.vue";
</script>

<template>
  <div class="wrapper">
    <Header></Header>
    <!-- <Sidebar></Sidebar> -->
    <!-- 主题区域 -->
    <!-- <div class="content_box">
      <router-view></router-view>
    </div> -->
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  height: 100vh;
  width: 100%;
  overflow: hidden;
}
</style>
