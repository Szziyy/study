<template>
  <!-- 类class -->
  <!-- 第一种写法，放置字符串 -->
  <h1 :class="msg">hello1</h1>
  <!-- 第二种写法 放置对象 -->
  <h1 :class="{active:isActive}">hello2</h1>
  <button @click="toggleActive">切换active</button>
  <!-- 第三种写法 放置数组 -->
  <h1 :class="arr">hello3</h1>
  <!-- 第四种写法 数组和对象相结合 -->
  <h1 :class="[classname,{active:isActive}]">hello4</h1>

</template>

<script>
  // 声明式
export default {
  name: 'App',
  // 数据
  data(){
    return{
      msg:'helloWorld',
      isActive:true,
      arr:['swiper','active'],
      classname:'abc'
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
      this.isActive = !this.isActive;
      this.arr.pop();
      this.classname = 'cba'
    }
  }
}
</script>

<style>
.active{
  background: greenyellow;
}
</style>
