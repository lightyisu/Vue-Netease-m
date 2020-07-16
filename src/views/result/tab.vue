<template>
    <div id="tab">
        <van-tabs v-model="active" swipeable>
            <van-tab title="单曲">
                <single_song></single_song>
            </van-tab>
            <van-tab title="视频">内容 2</van-tab>
            <van-tab title="歌手">内容 3</van-tab>
            <van-tab title="专辑">内容 4</van-tab>
        </van-tabs>
    </div>
</template>

<script>
    import single_song from "./single_song";
    export default {
        name: "tab",
        data(){
            return{
                active:0
            }

        },
        components:{
            single_song
        }


    }
</script>

<style scoped>

</style>