<template>
    <div>
        <h1>userName:{{ userName }}</h1>
        <h1>age:{{ age }}</h1>
        <h1>context:{{ context }}</h1>
    </div>
</template>

<script>
import {ref,onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted} from 'vue';
export default {
    setup(props){
        console.log(props);
        const context = ref('姓名是：'+props.userName+'，年龄是：'+props.age);
        return { context };
    },
    props:['userName','age']
}
</script>