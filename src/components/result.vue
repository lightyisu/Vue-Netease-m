<template>
    <div id="result">
        <input-top></input-top>
        <tab></tab>
    </div>
</template>

<script>
    import inputTop from "../views/search/input";
    import tab from '@/views/result/tab.vue'
    export default {
        name: "result"
        ,components:{
            inputTop,
            tab
        },
        created() {
            console.log(this.$route.query.key);
        }
    }
</script>

<style scoped>

</style>