<template>
<div>
<!-- 双括号语法 Mustache -->
  <h1>{{ msg }}</h1>
  <!-- javaScript表达式可以在模板语法里使用 -->
  <h1>{{ msg.split('') }}</h1>
  <h1>{{ msg.split('').reverse() }}</h1>
  <h1>{{ msg.split('').reverse().join('') }}</h1>
  <div v-bind:id="msg.split('').reverse().join('')"></div>
  <div>{{ color=='green'?'开心':'难过' }}</div>
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
      color:'green'
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
</style>
