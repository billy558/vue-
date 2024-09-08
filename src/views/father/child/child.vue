<script setup>
import { ref, reactive } from "vue";
const newUser = defineModel();
console.log("newUser", newUser.value);
let { obj } = newUser.value;
const dealUser = () => {
  newUser.value = {
    name: "王五",
    age: 1,
  };
};
const addAge = () => {
  newUser.value.age += 1;
};
const changeObj = () => {
  obj.aa = "bb";
};
const cObj = () => {
  obj = {
    aa: "bb",
    bb: "aa",
  };
  console.log("obj", obj);
};
</script>

<template>
  <div>
    <div>子组件</div>
    <button @click="newUser.name = '李四'">将name变为李四</button>
    <button @click="dealUser">对user重新赋值</button>
    <button @click="addAge">年龄+1</button>
    <button @click="changeObj">obj修改</button>
    <button @click="cObj">obj重新赋值</button>
    <div>子组件{{ obj }}</div>
  </div>
</template>

<style lang="scss" scoped></style>
