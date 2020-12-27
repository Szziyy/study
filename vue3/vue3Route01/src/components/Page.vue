<template>
    <div>
        <h1>Page页面,学习编程式跳转</h1>
        <button @click="toPage">跳转到user页</button>
        <button @click="replacePage">切换user页</button>
        <button @click="$router.go(1)">前进</button>
        <button @click="$router.go(-1)">后退</button>
    </div>
</template>

<script>
export default {
    methods:{
        toPage(){
            // this.$router.push('/user');
            // this.$router.push({path:'/user'});
            // 携带参数跳转
            // /user/123123
            // this.$router.push({path:'/user/123123'});
            // /user/123123
            this.$router.push({name:'/user',params:{id:'123123'}});
            // /user?search=sue
            this.$router.push({path:'/user',query:{search:'sue'}});
        },
        replacePage(){
            this.$router.replace();
        },
    },
    // 路由进入
    beforeRouteEnter(){

    },
    // 路由更新
    beforeRouteUpdate(){

    },
    // 路由离开
    beforeRouteLeave(){

    },
}
</script>