<template>
<div>
    <h1 @click="changeMsg">{{msg}}</h1>
  <input type="text" v-model="msg">
</div>
</template>

<script>
  // 命令式 
  // document.querySelector('h1').innerHTML = '命令式'

  // 声明式
export default {
  name: 'App',
  // 数据
  data(){
    return{
      msg:'helloWorld'
    }
  },
  // 方法
  methods:{
    changeMsg(){
      this.msg = '改变数据的方法'
    }
  }
}
</script>
