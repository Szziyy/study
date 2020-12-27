<template>
    <div>
        <h1>Films页{{ $route.params.id }}</h1>
    </div>
</template>

<script>
export default {
    mounted(){
        console.log(this.$route)
    }
}
</script>