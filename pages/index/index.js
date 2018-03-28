//index.js
//获取应用实例
const app = getApp()
var initData = 'this is first line\nthis is second line'
var extraLine = []


Page({
  data: {
    motto: 'Hello World',
    userInfo: {'phone':'13810224472'},
    hasUserInfo: false,
    hasuserLocation:false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    text:initData,

  },  
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  }, 
  searchBtn:function(e){
    wx.navigateTo({
      url: '../callPage/callpage',
    })
  },
  pkBtn:function(e){
    wx.navigateTo({
      url: '../onlinetest/onlinetest',
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
