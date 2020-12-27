<template>
<div>
  <h1>{{ store.state.message }}</h1>
  <button @click="store.setMessage('改变事件')">count is: {{ count }}</button>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      count: 0
    }
  },
  inject:['store']
}
</script>
