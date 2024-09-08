<script setup>
import http from "@/request/http.js";
import avator from "@/components/avator.vue";
const userInfo = ref();
const dialogTableVisible = ref();

onMounted(() => {
  http.get("/user").then((res) => {
    console.log("res", res);
    userInfo.value = res.data;
    userInfo.value.avator = "aaaaaa";
  });
});
const submit = () => {
  http.post("/user", userInfo.value).then((res) => {
    console.log("res", res);
  });
};
</script>

<template>
  <div>
    <div>我的用户名:{{ userInfo?.username }}</div>
    <div>我的密码:{{ userInfo?.password }}</div>
    <div>我的头像:{{ userInfo?.avator }}</div>
    <router-link to="/article">跳转到文章页面</router-link>
    <el-button type="primary" @click="dialogTableVisible = true"
      >更新用户信息</el-button
    >
    <el-dialog v-model="dialogTableVisible" title="更新用户信息" width="800">
      <div class="df">
        <div>{{ userInfo.avator }}</div>
        <avator v-model="userInfo.avator"></avator>
      </div>
      <div class="df">
        <div style="white-space: nowrap">用户名：</div>
        <el-input v-model="userInfo.username" placeholder=""></el-input>
      </div>
      <div class="df">
        <div style="white-space: nowrap">原密码：</div>
        <el-input v-model="userInfo.oldPassword" placeholder=""></el-input>
      </div>
      <div class="df">
        <div style="white-space: nowrap">新密码：</div>

        <el-input v-model="userInfo.newPassword" placeholder=""></el-input>
      </div>

      <template #footer>
        <el-button type="primary">取消</el-button>
        <el-button type="primary" @click="submit">确认</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<style lang="scss" scoped>
.df {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
</style>
