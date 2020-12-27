<template>
<div>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import store from './store/index.js';

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  provide:{
    store
  }
}
</script>
