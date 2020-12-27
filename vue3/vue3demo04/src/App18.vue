<template>
<div>
  <h1>{{count}}</h1>
  <button @click="countEvent">计数</button>
  <h1 @click="changeNum">{{num}}</h1>
</div>
</template>

<script>
import {ref} from 'vue';
export default {
  name: 'App',
  // vue3.0合成API
  setup(){
    // 在生命周期的创建初始化周期之前 之前执行
    console.log('setup');
    const num = ref(0);
    function changeNum(){
      num.value++
    }
    return {num,changeNum}
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
