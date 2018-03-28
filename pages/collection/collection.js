// pages/collection/collection.js
var app = getApp();
var collectionID;
var dataItems = require("../../utils/items.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    collectionID:[],
    data:{},
    allItems: dataItems.allItems().list1[0],
    page: 1,
    allOptions: ['A', 'B', 'C', 'D', 'E', 'F'],   //罗列所有选项序号，方便获取并判断
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var collectionID=wx.getStorageSync('collectionID') || [];
    if(collectionID.length != 0){
      this.setData({
        collectionID: collectionID,
 
      })
    }
    else{
      wx.showToast({
        title: '您尚未收藏',
        icon:'none',
        duration:2000
      })
    }
    

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