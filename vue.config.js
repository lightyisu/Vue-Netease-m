const path=require('path');
function resolve(dir){
    return path.join(__dirname,dir)
}
module.exports={
    devServer:{
        port:8080,
        hotOnly:true
    },
    configureWebpack:{
        resolve:{
            alias:{
                '@':resolve('src')
            }
        }
    }
}