<template>
  <div>
    <!-- <h1>Hello App!</h1> -->
    <!-- use router-link component for navigation. -->
    <!-- specify the link by passing the `to` prop. -->
    <!-- `<router-link>` will be rendered as an `<a>` tag by default -->
  <!-- <p>
    <router-link to="/foo">Go to Foo</router-link>
    <router-link to="/bar">Go to Bar</router-link>
  </p> -->
  <!-- route outlet -->
  <!-- component matched by the route will render here -->
  <!-- 命名视图 -->
  <router-view name="ShowTop"></router-view>
  <router-view></router-view>
  <router-view name="ShowFooter"></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import {reactive} from 'vue';



export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>
