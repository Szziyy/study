<template>
    <div>
        <input type="text" v-model="username">
        <button @click="getSon">传递给父组件</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            username:''
        }
    },
    methods:{
        getSon:function(){
            console.log(this.username)
            // 向父组件传递子组件的数据 传送$emit(‘事件名称’，传递参数)
            this.$emit('sendPerson',this.username);
        }
    }
}
</script>