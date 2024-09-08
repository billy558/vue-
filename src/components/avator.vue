<!-- 上传图片组件 -->
<script setup>
import { ref, reactive, defineModel } from "vue";
const squareUrl = defineModel();

// 文件上传成功
const handleAvatarSuccess = (res, file) => {
  console.log("文件上传成功");
  console.log("res", res);
  squareUrl.value = res.data.path;
  console.log("file", file);
};
// 文件上传前的函数--一般对文件进行校验
const beforeAvatarUpload = (file) => {
  console.log("文件上传前的校验", file);
};
const headers = {
  Authorization: "Bearer " + localStorage.getItem("token"),
};
</script>

<template>
  <div>
    <div>{{ squareUrl }}</div>

    <el-upload
      class="avatar-uploader"
      :show-file-list="false"
      :headers="headers"
      action="http://127.0.0.1:8080/api/upload"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload"
    >
      <img
        v-if="squareUrl"
        width="100px"
        height="100px"
        src="http://127.0.0.1:8888/image/1725636243342_01.jpg"
        class="avatar"
      />
      <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
    </el-upload>
  </div>
</template>

<style lang="scss" scoped></style>
