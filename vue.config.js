module.exports = {
  configureWebpack:{
    resolve:{
      extensions:[], //配置无视的文件名后缀
      alias:{//配置别名，默认的是有@：src的别名的
        'assets':'@/assets',
        'common':'@/common',
        'components':'@/components',
        'network':'@/network',
        'views':'@/views'
      }
    }
  }
}