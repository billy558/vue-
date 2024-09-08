<template>
    <div>
        <h1>小目标列表</h1>
        <ul>
            <li v-for="(item,index) in list">{{ item }}  <a @click.prevent="delTodo(index)" href="">删除</a></li>
        </ul>
        <input v-model="value" @keyup.enter="keyup" type="text" placeholder="输入回车确认">
        <div>共有个小目标</div>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
const list = reactive([])
let value  = ref('')
const keyup=()=>{
    // 往list里面push数据
    list.push(value.value)
    // 清除表单
    value.value=''
}
const delTodo=(index)=>{
    list.splice(index,1)
}
</script>

