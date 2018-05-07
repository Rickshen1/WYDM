// pages/displayData/displayData.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

      displayItemJson: {},
      //displayTitleContentArr:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      //options.node 长度有限制
      //console.log(options.node)
     var tmpStr = wx.getStorageSync("curDisplayItemStr");
     if (tmpStr=="")
         return;
     var json = JSON.parse(tmpStr);
      var that=this;
      if(json['unit']==''){
        json['unit']='无';
      }
      if(json['remark']==''){
          json['remark']='无';
      }
      if(json['englishName']==''){
          json['englishName']='无';
      }
      if(json['code']==''){
          json['code']='无';
      }
      that.setData({displayItemJson:json});
      
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})