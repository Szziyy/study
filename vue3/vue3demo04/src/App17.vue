<template>
<div>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" v-if="isShow" />
  <h1>{{msg}}</h1>
  <input type="text" v-model="msg">
  <button @click="changeShow">切换</button>
</div>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data(){
    return{
      msg:'',
      isShow:true
    }
  },
  methods:{
    changeShow:function(){
      this.isShow = !this.isShow;
    }
  },
  components: {
    HelloWorld
  },
  beforeCreate(){
    console.log('beforeCreate：初始化数据之前')
  },
  created(){
    console.log('created：数据初始化之后')
  },
  beforeMount(){
    console.log('beforeMounte：挂载渲染之前')
  },
  mounted(){
    console.log('mounted：挂载渲染之后')
  },
  beforeUpdate(){
    console.log('beforeUpdate：更新之前')
  },
  updated(){
    console.log('updated：更新之后')
  },
  beforeUnmount(){
    console.log('beforeDestory：销毁之前')
  },
  unmounted(){
    console.log('destoryed：销毁之后')
  }
}
</script>
