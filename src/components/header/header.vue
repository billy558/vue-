<template>
  <div class="header">
    <!-- 折叠按钮 -->
    <!-- <div class="header-left">
      后台管理系统

      <el-icon :size="30" color="red">
        <Edit />
      </el-icon>
    </div>
    <div class="header-right"></div> -->
    <el-icon><Plus /></el-icon>
    <el-icon><Unlock /></el-icon>
    <IconEye />
  </div>
</template>
<script setup></script>
<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  color: var(--header-text-color);
  background-color: var(--header-bg-color);
  border-bottom: 1px solid #ddd;
}
</style>
