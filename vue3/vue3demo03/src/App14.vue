<template>
  <!-- v-on -->
  <div>
    <!-- 绑定事件，不需要参数 -->
    <h1 @click="addEvent">{{num}}</h1>
    <!-- 绑定事件，直接处理表达式 -->
    <h1 @click="num+=2">{{num}}</h1>
    <!-- 绑定事件，传递参数 -->
    <h1 @click="addNumEvent(3)">{{num}}</h1>
    <!-- 绑定事件传递事件对象和参数 -->
    <h1 @click="addNumEvent1(4,$event)">{{num}}</h1>
    <!-- v-on是全称指令，@是缩写指令 -->
    <h1 v-on:click="addNumEvent1(4,$event)">{{num}}</h1>
    <!-- 一个事件绑定多个处理函数,绑定多个函数直接写函数名是没有用的，要函数名()才可执行 -->
    <h1 :style="{background:color}" v-on:click="addNumEvent1(4,$event),changeColor()">{{num}}</h1>
    <!-- 事件修饰符 -->
    <!-- 
      阻止事件冒泡.stop
      阻止默认事件.prevent
      事件只会触发一次.once
    -->
    <h1 v-on:click.once="addNumEvent1(4,$event)">{{num}}</h1>
    <!-- 按键修饰符 当按下回车就会执行事件 
      enter/tab/delete/esc/space/up/down/left/right
      系统修饰符
      .ctrl/.alt/.shift/.meta
      鼠标按键的修饰符
      .left/.right/.middle
    -->
    <input type="text" @keydown.enter="searchEvent">
  </div>
</template>

<script>
  // 声明式
export default {
  name: 'App',
  // 数据
  data(){
    return{
      num:0,
      color:'red'
    }
  },
  watch:{
  },
  // 方法
  methods:{
    addEvent:function(){
      this.num++
    },
    addNumEvent:function(number){
      console.log(number);
      this.num+=number
    },
    addNumEvent1:function(number,event){
      console.log(event);
      console.log(number);
      this.num+=number
    },
    changeColor:function(){
      this.color = 'blue';
    },
    searchEvent:function(){
      console.log('执行了搜索的事件')
    }
  }
}
</script>

<style>
</style>
