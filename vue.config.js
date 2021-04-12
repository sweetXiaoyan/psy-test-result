// 生产环境
let isProd = process.env.NODE_ENV === "production";
module.exports = {
  productionSourceMap: false,
  configureWebpack: config => {
    if (isProd) {
      // 为生产环境修改配置...
      config.externals = {
        "@antv/g2plot": {
          commonjs: "@antv/g2plot", //如果我们的库运行在Node.js环境中，import {XX} from '@antv/g2plot'等价于const XX = require('@antv/g2plot')
          commonjs2: "@antv/g2plot", //同上
          amd: "@antv/g2plot" //如果我们的库使用require.js等加载,等价于 define(["@antv/g2plot"], factory);
        }
      };
    }
  }
};
