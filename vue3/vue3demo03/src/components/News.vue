<template>
    <div>
        <h1>
            新闻内容：{{context}}
        </h1>
        <h1>从父组件传递过来的值:{{msg}}</h1>
    </div>
</template>

<script>
export default {
    props:['context','msg'],
    data(){
        return{
        
        }
    }
}
</script>