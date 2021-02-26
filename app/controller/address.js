'use strict';

const Controller = require('egg').Controller;

class AddressController extends Controller {
  async address() {
    let { ctx } = this;
    let {consignee,receivephone,area,detailaddress} = ctx.request.body;
    console.log(receivephone);
    let address = new this.app.model.Address(ctx.request.body)
    console.log(address)
    if(address){
      await address.save();
      ctx.body = {
        code:200,
        msg:'添加成功'
    }
    }
     

  }
}

module.exports = AddressController;
