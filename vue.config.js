const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave: false,
  transpileDependencies: true,
  publicPath: '/',
  css: {
    extract: true
  },
  // webpack errors 提示清除
  devServer: {
    port:8084,
    // client: {
    //   overlay: false,
    // },
    historyApiFallback: true,
    allowedHosts: "all",
  }
})
