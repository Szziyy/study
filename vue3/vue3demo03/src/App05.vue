<template>
<div>
<!-- 双括号语法 Mustache -->
  <h1>{{ msg }}</h1>
  <!-- v-once指令 ，使得内容只渲染一次 -->
  <h1 @click="changeMsg" v-once>{{msg}}</h1>
  <!-- v-html指令，使得内容插入html的代码 -->
  <div>{{content}}</div>
  <div v-html="content"></div>
  <!-- v-bind指令，绑定属性的内容 -->
  <div :id="id" v-once></div>
  <div v-bind:id="id"></div>
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
      msg:'helloWorld',
      content:'<h1>标题1</h1><h2>内容</h2>',
      id:'d1'
    }
  },
  // 方法
  methods:{
    changeMsg(){
      this.msg = '改变数据的方法',
      this.id = 'd2'
    }
  }
}
</script>

<style>
  #d1{
    width:100px;
    height:100px;
    background:red;
  }
    #d2{
    width:100px;
    height:100px;
    background:green;
  }
</style>
