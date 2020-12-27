<template>
  <!-- 计算属性 -->
  <div >{{ msg.split('').reverse().join('') }}</div>
  <div v-bind:id="reversrMsg">{{ reversrMsg }}</div>

  <input type="text" v-model="msg">
  <h1>{{ msg }}</h1>
</template>

<script>
  // 声明式
export default {
  name: 'App',
  // 数据
  data(){
    return{
      msg:'helloWorld'
    }
  },
  watch:{
    // 监听值的变化
    msg:function(newValue,oldValue){
      // 有两个属性 一个是新值 一个是老值
      if(newValue.length < 10){
        alert('你输入的值太少了')
      }
    }
  },
  // 方法
  methods:{
    choggleColor(){
      if(this.attributeName === 'id'){
        this.attributeName = 'class'
      }else{
        this.attributeName = 'id'
      }
    }
  }
}
</script>

<style>
#d1{
  width: 100px;
  height: 100px;
  background: green;
  margin: 0 auto;
}
.d1{
  width: 100px;
  height: 100px;
  background: greenyellow;
  margin: 0 auto;
}
</style>
