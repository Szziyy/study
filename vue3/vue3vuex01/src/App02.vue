<template>
<div>
  <h1>ajax请求</h1>
  <div v-for="(item,i) in store.state.resultList" :key="i">
    <p>{{ item.text }}</p>
  </div>
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
    let api = 'https://api.apiopen.top/getJoke?page=1&count=10&type=text';
    // fetch(api).then(res=>res.json()).then(result=>{  
    //   store.setRes(result.result);
    //   console.log(result);
    // })
    axios.get(api).then(result=>{
      store.setRes(result.data.result);
      console.log(result);
    })
    return {store}
  }
}
</script>
