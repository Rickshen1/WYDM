// pages/myPage/myPage.js

Page({
  /**
   * 页面的初始数据
   */
  data: {
    searchInput: "",
    btnText: "justTest",
    title: "this is title",
    titleImg: "../img/titlePicture.png",
    
    listData: [
      {
        cgi: '460-00-123-5',
        cellname: '北京市海淀区海兴大厦5',
        latitude: '39.95933',
        longitude: '116.298',
        pci: '501',
        rsrp: '-90'
      }, {
        cgi: '460-00-123-6',
        cellname: '北京市海淀区海兴大厦6',
        latitude: '38.902',
        longitude: '117.03',
        pci: '500',
        rsrp: '-90'
      }, {
        cgi: '460-00-123-7',
        cellname: '北京市海淀区海兴大厦7',
        latitude: '39.123',
        longitude: '115.111',
        pci: '502',
        rsrp: '-90'
      }, {
        cgi: '460-00-123-8',
        cellname: '北京市海淀区海兴大厦8',
        latitude: '38.999',
        longitude: '116.111',
        pci: '503',
        rsrp: '-90'
      },
      {
        cgi: '460-00-123-9',
        cellname: '北京市海淀区海兴大厦9',
        latitude: '39.123',
        longitude: '115.111',
        pci: '502',
        rsrp: '-90'
      }, {
        cgi: '460-00-123-10',
        cellname: '北京市海淀区海兴大厦10',
        latitude: '38.999',
        longitude: '116.111',
        pci: '503',
        rsrp: '-90'
      },
    ],
    
    dataMap: new Map(),
    remoteIpPort: getApp().globalData.remoteIp
  },
  
  navigateToSearch: function (e) {
    wx.navigateTo({
      url: '../search/search',
    })
  },
  btnClick: function () {
    var utilsData = require('../../utils/data.js');

    var moreList = utilsData.mtData().list;
    var list = this.data.listData.concat(moreList);
    var str = "";
    for (var i = 0; i < list.length; ++i) {
      str = str + list[i].cellname + ",";
    }
    this.setData({ btnText: str });
  },
  itemClick: function (e) {
    var idx=e.currentTarget.id;
    var tmpJson=this.data.listData[idx];
    var tmpStr=JSON.stringify(tmpJson);
    wx.navigateTo({url:"../displayData/displayData?node="+tmpStr,});
  },
  scrollToLowerHandler: function () {
    
    var utilsData = require('../../utils/data.js');

    var moreList = utilsData.mtData().list;
    var tmpList=this.data.listData.concat(moreList);
    this.setData({listData:tmpList});
    
    /*
    var that = this;
    var startId = that.data.listData.length + 1;
    var endId = startId + 1;
    
    wx.request({
      //url: 'http://127.0.0.1:35200/weiXinProgram/getListServletLink', //仅为示例，并非真实的接口地址
      url: that.remoteIpPort + '/weiXinProgram/getListServletLink', //仅为示例，并非真实的接口地址
      data: {
        'startId': '' + startId,
        'endId': '' + endId
      },
      method: 'post',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        //  var str = "a";
        var list = that.data.listData;
        for (var i = 0; i < res.data.length; ++i) {
          if ("idError" == res.data[i].name) {
            var newData = { "name": "done", "f1": "" };
            list.push(newData);
            break;
          }
          var newData = { "name": res.data[i].name, "f1": res.data[i].f1 };
          //newData={"name":"ni","f1":"go"};
          list.push(newData);
        }
        that.setData({ listData: list });
        //that.setData({ btnText: str });
        var app = getApp();
        app.globalData.dataArr = list;
      }
    });
    */
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //this.setData({btnText:"button clicked"});
    
    /*
    //后台访问远程Servlet获取初始数据
    wx.request({
      //url: 'http://127.0.0.1:35200/weiXinProgram/getListServletLink', //仅为示例，并非真实的接口地址
      url: 'http://192.168.0.102:35200/weiXinProgram/getListServletLink', //仅为示例，并非真实的接口地址
      //url: getApp().globalData.remoteIpPort+'/weiXinProgram/getListServletLink', //仅为示例，并非真实的接口地址
      data: {
        'startId': '0',
        'endId': '7'
      },
      method: 'post',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        
        that.setData({ listData: res.data });
        var app = getApp();
        app.globalData.dataArr = res.data;
      }
    })*/
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