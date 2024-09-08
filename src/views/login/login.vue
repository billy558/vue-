<template>
  <el-form
    :rules="rules"
    :model="user"
    ref="userForm"
    label-width="auto"
    style="max-width: 600px"
  >
    <el-form-item required label="用户名" prop="username">
      <el-input v-model="user.username" />
    </el-form-item>
    <el-form-item required label="密码" prop="password">
      <el-input v-model="user.password" @keyup.enter.native="onSubmit" />
    </el-form-item>
    <el-form-item>
      <el-button @click="onSubmit" class="btn" type="primary">登录</el-button>
    </el-form-item>
  </el-form>
  <el-button type="primary" @click="getUserInfo">请求用户信息</el-button>
  <el-button type="primary" @click="toPage">跳转</el-button>
</template>

<script setup>
import { reactive } from "vue";
import http from "@/request/http.js";
import { useUserInfoStore } from "@/stores/user.js";
import { useRouter } from "vue-router";
const router = useRouter();
const userInfo = useUserInfoStore();
// do not use same name with ref
const user = reactive({
  username: "",
  password: "",
});
const userForm = ref();

const getUserInfo = () => {
  http.get("/user").then((res) => {
    console.log("获取用户信息成功", res);
  });
};
const rules = ref({
  username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }],
});
const onSubmit = (test) => {
  userForm.value.validate((valid, fileds) => {
    console.log("valid", valid);
    if (!valid) return;
    http
      .post("/login", user)
      .then((res) => {
        console.log("res", res);
        window.localStorage.setItem("token", res.token);
        // // 跳转
        userInfo.userInfo = res.userInfo;
        router.push("/my");
      })
      .catch((err) => {
        console.log("err", err);
        // 用户不存在
        if (err.response.data.msg === "用户不存在") {
          // 跳转注册页面
          router.push("/regisn");
        }
      });
  });
};
</script>
<style scoped>
.btn {
  margin: auto;
}
</style>
