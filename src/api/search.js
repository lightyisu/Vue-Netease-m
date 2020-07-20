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
export  function baseIdToPlay(id) {
    return api.get('/song/url',{
        params:{
            id:id
        }
    })

}
export function album_id4pic(id) {
    return api.get('/album',{
        params:{
            id:id
        }
    })

}
