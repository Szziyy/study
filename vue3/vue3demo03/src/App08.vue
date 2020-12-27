<template>
  <!-- 计算属性 -->
  <div >{{ msg.split('').reverse().join('') }}</div>
  <div v-bind:id="reversrMsg">{{ reversrMsg }}</div>
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
  computed:{
    reversrMsg:function(){
      return this.msg.split('').reverse().join('')
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
