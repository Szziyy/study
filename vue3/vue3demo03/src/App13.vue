<template>
    <!-- v-for -->
    <ul>
      <!-- key为标识符 -->
      <li v-for="(item,index) in news" :key="index">index:{{index}},context:{{item}}</li>
    </ul>

    <ul>
      <!-- key为标识符 -->
      <li v-for="(item,index) in newList" :key="index">index:{{index}},context:{{item.name}}{{item.age}}{{item.type}}</li>
    </ul>

     <ul>
      <!-- key为标识符 -->
      <li v-for="(item,index) in newObj" :key="index">index:{{index}},context:{{item.name}}{{item.age}}{{item.type}}</li>
    </ul>

     <ul>
      <!-- key为标识符 -->
      <li v-for="(item,index) of newList" :key="index">index:{{index}},context:{{item.name}}{{item.age}}{{item.type}}</li>
    </ul>
</template>

<script>
  // 声明式
export default {
  name: 'App',
  // 数据
  data(){
    return{
      news:[
        '1',
        '2',
        '3',
        '4',
      ],
      newList:[
        {
          name:'s',
          age:11,
          type:'ue'
        },
        {
          name:'s',
          age:13,
          type:'ue'
        },
      ],
      newObj:{
        name:'sue',
        age:21,
        type:'帅！'
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
