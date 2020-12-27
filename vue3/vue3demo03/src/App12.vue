<template>
    <!-- v-if -->
    <h1 v-if="user=='超级vip'">欢迎金主爸爸</h1>
    <h1 v-else-if="user=='vip'">欢迎用户</h1>
    <h1 v-else>充值会让你更强</h1>
    <button @click="toggleUser">降低用户等级</button>

    <!-- 设置一个内容切换显示 -->
    <h1 v-show="isShow">切换显示内容</h1>
    <button @click="toggleShow">切换</button>
</template>

<script>
  // 声明式
export default {
  name: 'App',
  // 数据
  data(){
    return{
      user:'超级vip',
      isShow:true
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
    toggleUser(){
      if(this.user == '超级vip'){
        this.user = 'vip'
      }else if(this.user == 'vip'){
        this.user = '普通用户'
      }
    },
    toggleShow:function(){
      this.isShow = !this.isShow
    }
  }
}
</script>

<style>
.active{
  background: greenyellow;
}
</style>
