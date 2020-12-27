<template>
    <div>
        <h1>学生</h1>
        <h1>Name:{{ name }}</h1>
        <h1>classname:{{ classname }}</h1>
    </div>
</template>

<script>
import {ref,onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted,inject} from 'vue';
export default {
    setup(props){
        const student =  inject('student');
        return {...student};
    },
    props:['userName','age']
}
</script>