<template>
<div>
  <!-- 动态指令 -->
  <div v-bind:[attributeName]="d1"></div>
  <div :[attributeName]="d1"></div>
  <button @click="choggleColor">点击切换颜色</button>
  <button @[eventName]="choggleColor">点击切换颜色</button>
</div>
</template>

<script>
  // 声明式
export default {
  name: 'App',
  // 数据
  data(){
    return{
      attributeName:'class',
      d1:'d1',
      eventName:'click'
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
