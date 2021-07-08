// 生产环境
let isProd = process.env.NODE_ENV === "production";
module.exports = {
  // entry:{
  //     app:["./src/packages/main.ts"]
  // },
  productionSourceMap: false,
  configureWebpack: config => {
    if (config.mode === "production") {
      config.externals = ["vue", /^echarts\/.+$/];
    }
  }
};
