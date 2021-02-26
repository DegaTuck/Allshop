'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    //登录
  async login() {
    let {ctx} = this;
    //如果给前端返回数据

    //code msg data
    ctx.body = {
        code:200,
        msg:"登录成功",
        data:{Dhl:'小仙女21231'},
    }
  }

  //注册
  async register(){
    //查询有没有当前信息
    //接受前端传递的参数
    let { ctx } = this;
    let {phone,pwd} = ctx.request.body;
    //查询有没有当前信息
     let usert  = await ctx.model.User.findOne ({
         phone
     })
     let user = new this.app.model.User(ctx.request.body)
     console.log(user.phone);
     if (usert) {
         ctx.body = {
             code:200,
             msg:'用户已存在'
         }
     }else{
        if(!(/^1[3|4|5|7|8][0-9]{9}$/.test(user.phone))){
            ctx.body = {
                code:200,
                msg:'手机号有误'
            }
         }else{
             if(!(/^(\w){6,20}$/).test(user.pwd)){
                ctx.body = {
                    code:200,
                    msg:'密码必须是6到20位'
                }
             }else{
                    await user.save();
                    // await user.User.save();
                    ctx.body = {
                        code:200,
                        msg:'注册成功'
                    }
           }
         }
     }
      
  }
  
  async user(){
      
}
}

module.exports = UserController;
