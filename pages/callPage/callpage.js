Page({
  data:{
    phoneNum:'12345678901',  //测试用号码，并非真实
    userName:'',
    phoneId:""
  },
  //获取用户名
  userNameInput:function(e){
    this.setData({
      userName:e.detail.value
    })
  },
  //获取密码
  phoneIdInput:function(e){
    this.setData({
      phoneId:e.detail.value
    })
  },
  //点击 通话 按钮
  callBtnClick:function(e){
    //呼叫号码
    var that=this;
    wx.makePhoneCall({
      phoneNumber: that.data.phoneId
    })
  },
  //点击 添加 按钮
  addPhoneBtnClick:function(e){
    //添加联系人
    var that = this;
    wx.addPhoneContact({
      firstName: that.data.userName,//联系人姓名
      mobilePhoneNumber: that.data.phoneId, //联系人手机号
    })
  },
  //长按号码响应函数
  phoneNumTap:function(){
    var that = this;
    //提示呼叫号码还是将号码添加到手机通讯录
    wx.showActionSheet({
      itemList:['呼叫','添加联系人'],
      success:function(res){
        if(res.tapIndex==0){
          //呼叫号码
          wx.makePhoneCall({
            phoneNumber:that.data.phoneId,
          })
        }else if(res.tapIndex==1){
          //添加联系人
          wx.addPhoneContact({
            firstName: that.data.userName,//联系人姓名
            mobilePhoneNumber: that.data.phoneId, //联系人手机号
          })
        }
      }
    })
  }

})