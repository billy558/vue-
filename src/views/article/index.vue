<script setup>
import { ref, reactive } from "vue";
import http from "@/request/http.js";
import delDialog from "@/components/deleteDialog.vue";
import { deleteListElement } from "@/api/index.js";
const article_list = ref();
const getList = () => {
  return http.get("/article").then((res) => {
    article_list.value = res.data;
  });
};
onMounted(() => {
  getList();
});
const addUser = () => {
  http.post("/article", userInfo.value).then(async (res) => {
    await getList();
    dialogVisible.value = false;
    // 清空userInfo数据
    userInfo.value = {
      sex: 0,
    };
  });
};
const dialogVisible = ref(false);
const userInfo = ref({
  sex: 0,
});
const detailUser = (id) => {
  console.log("id", id);
  http.get("/article_detail?id=" + id).then((res) => {
    dialogVisible.value = true;
    userInfo.value = res.data;
    console.log("aaa", userInfo.value);
  });
};
const delUser = (id) => {
  delInfo.id = id;
  delInfo.showDialog = true;
  console.log("删除");
};

const delInfo = reactive({
  id: "",
  showDialog: false,
  delStatus: false,
});
watch(
  () => delInfo.delStatus,
  (nv, ov) => {
    if (nv) {
      // 表示删除成功
      getList();
    }
  }
);
</script>

<template>
  <div>
    文章页面
    <el-button type="primary" @click="dialogVisible = true">新增用户</el-button>
    <div v-for="item in article_list" class="item">
      <div>用户名：{{ item.name }}</div>
      <div class="btn">
        <el-button type="primary" @click="detailUser(item.id)">详情</el-button>
        <el-button type="primary" @click="delUser(item.id)">删除</el-button>
      </div>
    </div>
    <el-dialog
      v-model="dialogVisible"
      title="Tips"
      width="500"
      :before-close="handleClose"
    >
      <el-form ref="form" :model="userInfo" label-width="80px">
        <el-form-item
          label="用户名
          "
        >
          <el-input v-model="userInfo.name"></el-input>
        </el-form-item>
        <el-form-item
          label="年龄
          "
        >
          <el-input v-model="userInfo.age"></el-input>
        </el-form-item>
        <el-form-item
          label="性别
          "
        >
          <el-radio-group v-model="userInfo.sex">
            <el-radio :value="0">男</el-radio>
            <el-radio :value="1">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item
          label="学校
          "
        >
          <el-input v-model="userInfo.school"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="addUser"> 确认 </el-button>
        </div>
      </template>
    </el-dialog>

    <delDialog
      :api="deleteListElement"
      url="/article"
      v-model="delInfo"
    ></delDialog>
  </div>
</template>

<style lang="scss" scoped>
.item {
  border: 1px solid #000;
  padding: 20px;
  margin-bottom: 20px;
}
</style>
