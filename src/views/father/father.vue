<script lang="ts" setup>
import { ref, reactive } from "vue";
import child from "./child/child.vue";
const user = ref({
  name: "张三",
  age: 12,
  obj: {
    aa: "aa",
    bb: "bb",
  },
});
const func = (...res) => {
  console.log("res", res);
};
func(1, 23, 4);
</script>

<template>
  <div>
    <div>父组件user:{{ user }}</div>
    <div></div>
    <child v-model="user"></child>
  </div>
</template>

<style lang="scss" scoped></style>
