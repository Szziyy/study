// vite配置跨域请求
module.exports = {
        proxy:{
            '/api':{
                target:'https://syzs.qq.com',
                changeOrigin:true,//是否允许跨域
                rewrite:path=>path.replace(/^\/api/,'')
            }
        }
}