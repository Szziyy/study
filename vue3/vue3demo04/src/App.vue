<template>
<div>
  <h1>{{count}}</h1>
  <button @click="countEvent">计数</button>
  <h1 @click="changeNum">{{num}}</h1>

  <!-- <h1>用户名:{{ user.userName }}</h1>
  <h1>性别:{{ user.sex }}</h1>
  <h1>年龄:{{ user.age }}</h1> -->

  <h1>用户名:{{ userName }}</h1>
  <h1>性别:{{ sex }}</h1>
  <h1 @click="changeUser">年龄:{{ age }}</h1>
  <h1>翻转的姓名:{{ reverName }}</h1>
  <User :userName="userName" :age='age' />
  <Student/>
</div>
</template>

<script>
import {ref,reactive,toRefs, computed, watchEffect, watch,provide} from 'vue';
import User from './components/User.vue';
import Student from './components/Student.vue';
export default {
  components: { User, Student },
  name: 'App',
  // vue3.0合成API
  setup(){
    // 在生命周期的创建初始化周期之前 之前执行
    console.log('setup');
    const num = ref(0);
    const user = reactive({
      userName:'sue',
      sex:'男',
      age:22,
      reverName:computed(()=>{
        return user.userName.split('').reverse().join('');
      })
    })

    function changeNum(){
      num.value++
    }
    function changeUser(){
      user.age = 23
    }
    watchEffect(()=>{
      console.log(user.age);
      console.log('当user.age发生改变的时候，就会触发函数')
    })
    
    // 单独监听
    watch(num,(newNum,prevNum)=>{
      console.log(newNum);
      console.log(prevNum);
      console.log('num改变的时候，就会触发这个函数')
    })

    // 多个监听
    watch([num,user],(newNum,prevNum)=>{
      console.log(newNum);
      console.log(prevNum);
      console.log('num改变的时候，就会触发这个函数')
    })

    const student = reactive({
      name:'sue',
      classname:'大四'
    });

    provide('student',student);

    return {num,changeNum,user,...toRefs(user),changeUser}
  },
  data(){
    console.log('data');
    return{
      count:0
    }
  },
  methods:{
    countEvent:function(){
      this.count++
    }
  },
  computed:{
    User,Student
  },
  beforeCreate(){
    console.log('beforeCreate：初始化数据之前')
  },
  created(){
    console.log('created：数据初始化之后')
  },
  beforeMount(){
    console.log('beforeMount：挂载渲染之前')
  },
  mounted(){
    console.log('mounted：挂载渲染之后')
  },
}
</script>
