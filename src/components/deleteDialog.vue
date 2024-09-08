<script setup>
import { ref, reactive } from "vue";
const props = defineProps({
  url: String,
  api: Function,
});
const delInfo = defineModel();
const delSubmit = () => {
  props.api(props.url, delInfo.value.id).then((res) => {
    delInfo.value.showDialog = false;
    delInfo.value.delStatus = true;
    console.log("删除成功");
  });
};
</script>

<template>
  <div>
    <!-- 删除弹框 -->
    <div>{{ delInfo }}</div>
    <el-dialog v-model="delInfo.showDialog" title="Tips" width="500">
      <span>是否确认删除</span>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="delInfo.showDialog = false">取消</el-button>
          <el-button type="primary" @click="delSubmit"> 确认 </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<style lang="scss" scoped></style>
