<template>
  <div>注册</div>
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
      <el-button @click="onSubmit" class="btn" type="primary">注册</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { reactive } from "vue";
import http from "@/request/http.js";
import { useRouter } from "vue-router";
const router = useRouter();
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
    if (!valid) return;
    http
      .post("/register", user)
      .then((res) => {
        // 跳转
        console.log("res", res);
        window.$message({ message: "注册成功", type: "success" });
        router.push("/login");
      })
      .catch((err) => {
        console.log("err", err);
      });
  });
};
</script>
<style scoped>
.btn {
  margin: auto;
}
</style>
