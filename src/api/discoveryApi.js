import axios from 'axios'
import {baseUrl} from '@/common/config.js'
let discovery=axios.create({
    baseURL:baseUrl
})
export function getBanner(){
   return discovery.get('/banner',{
        params:{
            type:0
        }
    })
}
export function getPersonalized(){
    return discovery.get('/personalized',{
        params:{
            limit:6
        }
    })
}
export function getPersonalizedSongs(){
    return discovery.get('/personalized/newsong')
}
export function getTopList(){
    return discovery.get('/toplist')
}
export function getSongListDetails(id){
    return discovery.get('/playlist/detail',{
        params:{
            id:id
        }
    })
}