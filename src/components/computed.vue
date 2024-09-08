<template>
    <div class="box">
        <h2>计算属性：{{ latestCount }}</h2>
        <div>第一个数字；<input v-model.number="count.first" type="text"></div>
        <div>第二个数字；<input v-model.number="count.second" type="text"></div>
        <button @click="add">加</button>
        <button @click="reduce">减</button>
        <button @click="take">乘</button>
        <button @click="dividi">除</button>
        <button @click="empty">清空</button>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
const count = reactive({
    first:'',
    second:''
})
let latestCount = ref('')
const add = ()=>{
    latestCount.value = count.first+count.second
}
const reduce = ()=> latestCount.value = count.first-count.second
const take = ()=>latestCount.value = count.first*count.second
const dividi = ()=>latestCount.value = parseInt(count.first/count.second)
const empty = ()=>{
    latestCount.value=''
    count.first=''
    count.second=''
}
</script>

<style lang="scss" scoped>

</style>