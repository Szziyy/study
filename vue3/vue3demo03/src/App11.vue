<template>
  <!-- style 样式 -->
  <!-- 第一种写法，放置字符串 -->
  <h1 :style="styleName">hello1</h1>
  <!-- 第二种写法 放置对象 -->
  <h1 :style="{background:'pink'}">hello2</h1>
  <button @click="toggleActive">切换active</button>
  <h1 :style="styleObj">hello3</h1>
  <!-- 第三种写法 数组和对象相结合 -->
  <h1 :style="[styleObj,{width:'500px'}]">hello4</h1>

</template>

<script>
  // 声明式
export default {
  name: 'App',
  // 数据
  data(){
    return{
      styleName:'background:green',
      styleObj:{
        // 如果遇到需要多个单词组成的样式 可以使用引号
        // 亦可以使用驼峰命名法
        'background-color':'yellow',
        border:'1px solid green',
        boxSizing:'border-box'
      }
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
    toggleActive(){
      this.styleObj.backgroundColor = 'blue'
    }
  }
}
</script>

<style>
.active{
  background: greenyellow;
}
</style>
