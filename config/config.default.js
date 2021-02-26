/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_666666';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  //连接数据库
  config.mongoose = {
    url: 'mongodb://localhost:27017/shop',
  }


config.security = {
  // 关闭csrf验证
  csrf: {
    enable: false,
    ignoreJSON: true,
  },
  // domainWhiteList:'http://192.177.2.67:7001'
};

  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
    // 下面这条加上才能共享跨域session，同时前端ajax请求也要加上响应的参数
    credentials: true, 
};


  return {
    ...config,
    ...userConfig,
  };
};
