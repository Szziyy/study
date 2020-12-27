<template>
<div>
  <h1>ajax请求</h1>
  <div v-for="(item,i) in store.state.resultList" :key="i">
    <p>{{ item.text }}</p>
  </div>
  <h1>{{ store.state.message }}</h1>
</div>
</template>

<script>
import store from './store/index.js';
import axios from 'axios';

export default {
  name: 'App',
  provide:{
    store
  },
  setup(){
    let api = '/user/userinfo';
    // fetch(api).then(res=>res.json()).then(result=>{  
    //   store.setRes(result.result);
    //   console.log(result);
    // })
    axios.get(api).then(result=>{
      // store.setRes(result.data.result);
      // console.log(result);
      store.setMessage(result.data.username+result.data.type)
    })
    return {store}
  }
}
</script>
