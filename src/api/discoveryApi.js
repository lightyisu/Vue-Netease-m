import api from './base'
export function getBanner(){
   return api.get('/banner',{
        params:{
            type:0
        }
    })
}
export function getPersonalized(){
    return api.get('/personalized',{
        params:{
            limit:6
        }
    })
}
export function getPersonalizedSongs(){
    return api.get('/personalized/newsong')
}
export function getTopList(){
    return api.get('/toplist')
}
export function getSongListDetails(id){
    return api.get('/playlist/detail',{
        params:{
            id:id
        }
    })
}
