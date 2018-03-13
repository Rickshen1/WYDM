//index.js
//获取应用实例
const app = getApp()
var initData = 'this is first line\nthis is second line'
var extraLine = []
var fileData = require('../../utils/data.js')

Page({
  data: {
    motto: 'Hello World',
    phone:'13810224472',
    userInfo: {'phone':'13810224472'},
    hasUserInfo: false,
    hasuserLocation:false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    text:initData,
    latitude:'',
    longitude:'',
    showData:fileData.mtData().list,
    userSearchInput:'',
    cellcgi:'',
    cellname:'',
    celllatitude:'',
    celllongitude:'',
    cellpci:'',
    cellrsrp:''
  },  
  userSearchInput:function(e){
    this.setData({
      userSearchInput:e.detail.value
    })
  },
  //点击搜索
  searchBtn:function(e){
    if(this.data.userSearchInput != ''){
      this.setData({
        cellcgi:this.data.showData[this.data.userSearchInput].cgi,
        cellname: this.data.showData[this.data.userSearchInput].cellname,
        cellpci: this.data.showData[this.data.userSearchInput].pci,
        cellrsrp: this.data.showData[this.data.userSearchInput].rsrp,
        celllatitude: this.data.showData[this.data.userSearchInput].latitude,
        celllongitude: this.data.showData[this.data.userSearchInput].longitude
      })
    }
  },  //获取小区地理位置
  getcellLoc:function(e) {
    wx.openLocation({
      latitude: parseFloat(this.data.celllatitude),
      longitude: parseFloat(this.data.celllongitude),
      scale: 28
    })
  },
  openuserLoc:function(e){
    wx.getLocation({
      success: function (res) {

          //location: formatLocation(res.longitude, res.latitude)
          var latitude = res.latitude
          var longitude =  res.longitude
          wx.openLocation({
            latitude: latitude,
            longitude: longitude,
            scale: 28
          })
      }
    })
  },
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
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
  //获取用户地理位置
  getuserLoc: function(e) {
    console.log(e)
    app.globalData.userlatitude = e.detail.userlatitude
    var that = this;
    wx.getLocation({
      success: function (res) {
        that.setData({
          //location: formatLocation(res.longitude, res.latitude)
          latitude: res.latitude,
          longitude: res.longitude,
          hasuserLocation:true
        })
      }
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
