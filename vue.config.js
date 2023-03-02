const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
// module.exports = {
//   // devServer的配置
//   devServer: {
//     // 自定义端口
//     port: 8888,
//     // 自动打开浏览器
//     // open: true,
//     // 用于配置反向代理
//     proxy: {
//       // 代理请求， 匹配所有以/api开头的请求
//       '/api': {
//         // 目标服务器，所有以/api开头的请求接口代理到目标服务器
//         target: 'http://1.15.51.127:8080/',
//         // 重写路径，此时用于匹配反向代理的/api可以替换为空
//         // pathRewrite: { '^/api': '' },
//         // 如果代理到HTTPS服务器需要设置secure为true，默认为false
//         secure: true
//       }
//     }
//   }
// }
