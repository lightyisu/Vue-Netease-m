<template>
    <div id="search-hot">
        <h3>热搜榜</h3>
        <div id="hot-content">
            <div class="song" v-for="(word,index) in hot_word" :key="index">
                <span class="index"  :class="index<3?top:''">{{index+1}}</span>
                <div class="song-content">
                    <h3>{{word.searchWord}}</h3>
                    <p class="description">{{word.content}}</p>
                </div>
                <p class="hot_index">{{word.score}}</p>
            </div>
        </div>
    </div>
</template>

<script>

    import {gethotSearch} from '@/api/search.js'
    export default {
        name: "search-hot",
        data(){
            return{
                hot_word:'',
                top:'top'
            }
        },
        created() {
            gethotSearch().then((val)=>{

                this.hot_word=val.data.data;
            })
        }
    }
</script>

<style lang="stylus" scoped>
    h3
        font-size 16px

    .index
        display inline-block
        position relative
        bottom 8px
     .song-content

        display inline-block
        margin-left 20px
        h3
            margin 0
        p
            color lightgray
            font-size 12px
            margin 0
    .hot_index
        display inline-block
        float right
        margin-right 20px
        font-size 12px
        color lightgray
    .song
        padding 10px
    .top
        color red

</style>