<template>
  <!-- 引用组件 -->
  <div>
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
    <!-- 通过props传递子组件数据 -->
    <News :context='newContext' :msg='msg'/>
    <!-- 通过绑定子组件$emit传递的自定义函数绑定执行 -->
    <Login @sendPerson='getPerson'/>
    <h1>从子组件传递过来的值:{{msg}}</h1>
  </div>
</template>

<script>
// 引用组件
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'
import News from './components/News.vue'
import Login from './components/Login.vue'
  // 声明式
export default {
  name: 'App',
  // 数据
  data(){
    return{
      newContext:'今天的新闻内容是xxxx',
      msg:''
    }
  },
  watch:{
  },
  // 方法
  methods:{
    // 接受子组件传递过来的参数 value
    getPerson(value){
      console.log(value)
      this.msg = value
    }
  },
  components:{
    Header,
    Main,
    Footer,
    News,
    Login
  }
}
</script>

<style>
</style>
