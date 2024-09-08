<template>
    <div>
        子组件{{ num }}
        <button @click="add">点击加1</button>
        <button @click="ap">点击输出</button>
        <button @click="ch">子组件修改接收的值</button>
    </div>
</template>

<script >
import { inject } from 'vue'
export default{
    setup(props,{emit}){
        const add = ()=>{
            emit('add',props.num++)
        }
        const ch = ()=>{
            console.log(num.value++)
        }
        const ap = inject('add')
        const num = inject('num')
        return {
            add,
            ap,
            num,
            ch
        }
    }
}
// import { defineEmits, defineProps } from 'vue';
// export default{



// }

</script>

<style lang="scss" scoped>

</style>