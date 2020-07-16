import axios from 'axios'
import {baseUrl} from '@/common/config.js'

export default axios.create({
    baseURL:baseUrl
})