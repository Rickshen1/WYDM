// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content_show: true,
    searchValue: '',
    resJsonData: [],
    testVal: 'button',
    hitData: [],
    showHotSearch: true,
    hotSearchItems: ["小区偏置", "eMTC起始子帧", "小区上行带宽", "PHR禁止定时器时长", "PUCCH期望功率"],
    historySearchItems: ["PUCCH期望功率", "PHR禁止定时器时长", "eMTC起始子帧", "PRACH频域偏移"],
    dataForSearch: [
      {
        cgi: '460-00-123-5',
        cellname: '海南省海淀区海兴大厦5',
        latitude: '39.95933',
        longitude: '116.298',
        pci: '501',
        rsrp: '-90'
      }, {
        cgi: '460-00-123-6',
        cellname: '海南省海淀区海兴大厦6',
        latitude: '38.902',
        longitude: '117.03',
        pci: '500',
        rsrp: '-90'
      }, {
        cgi: '460-00-123-7',
        cellname: '海南省海淀区海兴大厦7',
        latitude: '39.123',
        longitude: '115.111',
        pci: '502',
        rsrp: '-90'
      }, {
        cgi: '460-00-123-8',
        cellname: '广东省海淀区海兴大厦8',
        latitude: '38.999',
        longitude: '116.111',
        pci: '503',
        rsrp: '-90'
      },
      {
        cgi: '460-00-123-9',
        cellname: '广东省海淀区海兴大厦9',
        latitude: '39.123',
        longitude: '115.111',
        pci: '502',
        rsrp: '-90'
      }, {
        cgi: '460-00-123-10',
        cellname: '广东省海淀区海兴大厦10',
        latitude: '38.999',
        longitude: '116.111',
        pci: '503',
        rsrp: '-90'
      },
    ],
    allGuiFanArr: [],

    //remoteIpPort:getApp().globalData.remoteIp
  },
  search: function (key) {
    var that = this;
    if (key == "") {
      that.setData({ showHotSearch: true });
      //that.setData({hitData:allGuiFanArr});
      that.setData({ hitData: [] });
      return;
    }
    that.setData({ showHotSearch: false });
    var keyArr = key.trim().split(" ");
    var arr = [];
    //console.log(that.data.allGuiFanArr.length)
    for (let typeIndex = 0; typeIndex < that.data.allGuiFanArr.length; ++typeIndex) {
      var typeItemData = that.data.allGuiFanArr[typeIndex];
      //console.log(typeItemData)
      for (let keyIndex = 0; keyIndex < keyArr.length; ++keyIndex) {
        //console.log(guiFanData);
        if (typeItemData.chineseName.indexOf(keyArr[keyIndex]) >= 0) {
          arr.push(typeItemData);
          break;
          //console.log(that.data.allGuiFanArr[i]);
        }
      }
    }
    if (arr.length == 0) {
      that.setData({ hitData: [{ show: true, chineseName: "未找到相关规范" }] });
    } else {
      that.setData({ hitData: arr });
    }
    //console.log("name:"+that.data.hitData[0].chineseName+", showHot:"+that.data.showHotSearch);
  },
  getSearchInput: function (e) {
    var tmpVal = e.detail.value;
    this.setData({ searchValue: tmpVal });
    if (!tmpVal || tmpVal.length == 0) {
      this.setData({ content_show: false, });
      this.setData({ resJsonData: [] });
    }
    //console.log(this.data.searchValue);
  },
  itemClick: function (e) {
    //console.log("select:");
    //var dataArr = this.data.allGuiFanArr;
    var selectedKey = e.currentTarget.dataset.gag;
     
    //console.log("select:"+selectedKey);
   
    //console.log(this.data.allGuiFanArr);
    for (let typeIndex = 0; typeIndex < this.data.allGuiFanArr.length; ++typeIndex) {
      var typeItemData = this.data.allGuiFanArr[typeIndex]; 
      if (typeItemData.chineseName == selectedKey) {
        //console.log(typeItemData);
        var tmpStr = JSON.stringify(typeItemData);
           //console.log(tmpStr);
           wx.setStorageSync("curDisplayItemStr", tmpStr)
           wx.navigateTo({ url: "../displayData/displayData?node=" });//+ tmpStr
          //console.log(tmpStr);
          break;
        }
       
    }

  },
  searchItem: function (e) {

    var that = this;
    var dataArr = that.data.dataForSearch;
    var searchStr = that.data.searchValue;
    if (!searchStr || searchStr.length == 0) {
      this.setData({ content_show: false, });
      this.setData({ resJsonData: [] });
      return;
    }
    var arr = [];
    for (var i = 0; i < dataArr.length; i++) {
      var tmpRes = dataArr[i].cellname.indexOf(searchStr);
      //console.log("input:"+that.searchValue+"data:"+dataArr[i].cellname+",tmp:"+tmpRes);
      if (tmpRes != -1) {
        arr.push(dataArr[i]);
      }
    }
    //var str=JSON.stringify(arr);
    //console.log("len:"+arr.length);
    if (arr.length > 0) {
      that.setData({ resJsonData: arr });
      that.setData({ content_show: true });
    } else {
      that.setData({ resJsonData: [] });
      that.setData({ content_show: false })
    }
    //console.log(this.data.resJsonData);
    /*
    var that = this;
    if (!that.data.searchValue || that.data.searchValue.length==0){
      return;
    }
    wx.request({
      //url: 'http://127.0.0.1:35200/weiXinProgram/searchItemServletLink', //仅为示例，并非真实的接口地址
      url: getApp().globalData.remoteIp+'/weiXinProgram/searchItemServletLink', //仅为示例，并非真实的接口地址
      data: {
        'searchInfo': that.data.searchValue,
        'endId': '2'
      },
      method: 'post',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        if (res.data.name == "notFound") {
          that.setData({
            content_show: false,
          });
          that.setData({ resJsonData: '' });
        }else{
          that.setData({
            content_show: true,
          });
          
          that.setData({ resJsonData: res.data });
        }
      },
      fail: function (e) {
        wx.showToast({
          title: '网络异常！',
          duration: 2000
        });
      }
    });
    */
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var guiFanData = (wx.getStorageSync("allDataList") || []);
    console.log(guiFanData)
    this.setData({ allGuiFanArr: guiFanData });
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

  },
  wxSerchFocus: function () {
    this.setData({ testVal: "focus" });
  },
  wxSearchInput: function (e) {
    console.log(e.detail.value)
    this.search(e.detail.value);
    //this.setData({ testVal: "input" });
  },

  wxSearchBlur: function () {
    var that = this;
    //console.log("aaa");
    // that.setData({ showHotSearch: true });
    // that.setData({ hitData: [] });
    // this.setData({ testVal: "blur" });
  },
})