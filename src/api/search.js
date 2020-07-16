import api from './base.js'
export  function gethotSearch() {
    return api.get('/search/hot/detail')
}
export  function getsearchResult_song(keywords,type,limit) {
    return api.get('/search',{
        params:{
            keywords:keywords,
            type:1
        }
    })

}