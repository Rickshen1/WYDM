// pages/myPage/myPage.js 
var demoData = require('../../data/demo_data.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    searchInput: "",
    btnText: "justTest",
    addBtnText: "自定义词条",
    title: "this is title",
    titleImg: "../img/titlePicture.png",
    dataMap: new Map(),
    remoteIpPort: getApp().globalData.remoteIp,
    list1: demoData.list1Arr
  },
  addBtnClick: function (e) {
    wx.navigateTo({ url: "../addItem/addItem" });
  },
  navigateToSearch: function (e) {
    wx.navigateTo({
      url: '../search/search',
    })
  },
  btnClick: function () {
    var arr = (wx.getStorageSync("allDataList") || []);
    console.log(arr);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('callpage onLoad');
    var tmp = wx.getStorageSync("allDataList");
    if (typeof (tmp) != 'object') {
      wx.setStorageSync("allDataList", demoData.list3Arr);// this.data.list1
      tmp = wx.getStorageSync("allDataList");
      console.log("初始化allDataList行数:" + tmp.length);
    } else {
      console.log("缓存数据allDataList行数:" + tmp.length);
    }

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
    var that = this;
    var tmp = wx.getStorageSync("allDataList");
    if (typeof (tmp) == 'object') {
      //console.log("onShow allDataList:" + tmp.length);
      if (demoData.list3Arr.length < tmp.length) {
        //console.log("onShow allDataList: 新增了 " + (tmp.length - demoData.list3Arr.length) + "条");
        //清空二级分类所有的arrData
        demoData.list3Arr = [];
        demoData.list3Arr = tmp; //新纪录集合
        //console.log("onShow allDataList:" + demoData.list3Arr.length);
        //每次onShow，that.data.list1[i].arrData都自动被清空。只要改下隐藏状态即可
        for (let i = 0; i < that.data.list1.length; i++) {
          let arr1 = that.data.list1[i];
          //console.log("arr1.hidden=" + that.data.list1[i].hidden);
          that.data.list1[i].hidden = true;
          that.data.list1[i].arrData = [];
        }
        //保存初始状态
        that.setData({
          list1: that.data.list1
        })
      }
    } else {
      console.log("onShow allDataList 为空");
    }
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

  },
  //点击一级菜单
  hiddenBtn: function (e) {
    var that = this;
    //
    var id = e.currentTarget.dataset.id;
    //
    var index = e.currentTarget.dataset.index;
    //
    // 隐藏或显示内容 
    that.data.list1[index].hidden = !that.data.list1[index].hidden;
    if (that.data.list1[index].arrData.length == 0) {
      that.data.list1[index].arrData = demoData.list2Arr.filter((item) => {
        return item.typeid === id;
      })
    }
    that.setData({
      list1: that.data.list1
    })
    console.log(that.data.list1.length)
    console.log(that.data.list1[index].arrData.length)
  },
  //点击二级菜单
  hiddenBtnSub: function (e) {
    var that = this;
    // 获取事件绑定的当前组件
    var id = e.currentTarget.dataset.id;           //ID
    var typeid = e.currentTarget.dataset.typeid;   //2级类型ID 
    //
    var index1 = e.currentTarget.dataset.owerindex;//1级索引
    var index2 = e.currentTarget.dataset.index;    //当前索引
    //
    var strindex = e.currentTarget.dataset.name;   //文本索引 
    // 隐藏或显示内容
    that.data.list1[index1].arrData[index2].hidden = !that.data.list1[index1].arrData[index2].hidden;
    if (that.data.list1[index1].arrData[index2].arrData.length == 0) {
      //从明细表查询出指定的列表 
      that.data.list1[index1].arrData[index2].arrData = demoData.list3Arr.filter((item) => {
        return item.typeid === typeid && item.index === strindex;
      })
    }
    that.setData({
      list1: that.data.list1
    })
  },
  //点击三级菜单
  hiddenBtnSub3: function (e) {
    var that = this;
    var idx = e.currentTarget.id;
    var typeid = e.currentTarget.dataset.typeid;
    //
    var index1 = e.currentTarget.dataset.name;     //1级索引
    var index2 = e.currentTarget.dataset.owerindex;//2级索引
    var index3 = e.currentTarget.dataset.index;    //当前索引
    //
    var tmpJson = that.data.list1[index1].arrData[index2].arrData[index3];
    var tmpStr = JSON.stringify(tmpJson);
    wx.setStorageSync("curDisplayItemStr", tmpStr)
    wx.navigateTo({ url: "../displayData/displayData?node=", });
  }
})