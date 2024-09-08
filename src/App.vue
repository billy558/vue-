<script setup>
import { h, onBeforeMount, onMounted } from "vue";
import http from "@/request/http.js";
import { useUserInfoStore } from "./stores/user.js";

const userInfo = useUserInfoStore();
</script>
<template>
  <router-view></router-view>
</template>

<style lang="scss" scoped></style>
