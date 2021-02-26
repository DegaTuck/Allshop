'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  //登录
  router.post('/user/login',controller.user.login);
  router.get('/user/register',controller.user.register);
  router.post('/user',controller.user.user);
  router.post('/Address/addReceiveAddress',controller.address.address);
};
