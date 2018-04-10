// pages/addItem/addItem.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShowToast:false,
    toastText:'toast',
    importanceArray:["A","B","BC"],
    importanceIndex:0,
    dataTypeArray:["字符串","整型","枚举","浮点型","结构列表"],
    dataTypeIndex:0,
    typeArray:["性能测量规范","配置资源模型","指标集"],//注意：分类顺序要和callPage的list中的顺序一致，后面将自定义词条添加到callPage的list会用到list的下标。
    typeIndex:0,
    chineseName:'',
    englishName:'',
    code:'',
    unit:'',
    remark:'',
    meanning:'',
  },
  showToast: function (aToastTime, info) {
    var _this = this;
    // toast时间  
    _this.data.toastTime = parseInt(aToastTime) ? parseInt(aToastTime) : 2000;
    // 显示toast  
    _this.setData({
      isShowToast: true, toastText: info
    });
    // console.log("showToast:"+this.data.isShowToast);
    // 定时器关闭  
    setTimeout(function () {
      _this.setData({
        isShowToast: false
      });
    }, 3000);
  },  
  chineseNameInput:function(e){
      this.setData({chineseName:e.detail.value,});
  },
  englishNameInput:function(e){
      this.setData({englishName:e.detail.value,});
  },
  unitInput:function(e){
      this.setData({unit:e.detail.value,}) ;
  },
  remarkInput:function(e){
      this.setData({remark:e.detail.value});
  },
  meanningInput:function(e){
      this.setData({meanning:e.detail.value});
  },
  codeInput:function(e){
      this.setData({code:e.detail.value});
  },
  submitBtnClick:function(e){
      console.log("submitBtnClick");
      if(this.data.chineseName=='' || this.data.meanning==''){
        this.showToast(1000,'中文名或含义不能为空');
        return;
      }
      var word={};
      word["type"]=this.data.typeArray[this.data.typeIndex];
      word["chineseName"]=this.data.chineseName;
      word["englishName"]=this.data.englishName;
      word["code"]=this.data.code;
      word["unit"]=this.data.unit;
      word["remark"]=this.data.remark;
      word["importance"]=this.data.importanceArray[this.data.importanceIndex];
      word["dataType"]=this.data.dataTypeArray[this.data.dataTypeIndex];
      word["meanning"]=this.data.meanning;
      console.log(word);
      var allGuiFanArr = (wx.getStorageSync("allDataList")||[]);
      allGuiFanArr[this.data.typeIndex].arrData.push(word);
      wx.setStorageSync("allDataList");
      var pages=getCurrentPages();
      var callPage=pages[pages.length-2];
      callPage.setData({ list:allGuiFanArr});
      this.showToast(1000,"提交成功");
      wx.navigateBack();
  },
  bindImportancePickerChange: function (e) {
    console.log('重要度picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      importanceIndex: e.detail.value
    })
  },
  bindDataTypePickerChange: function (e) {
    console.log('数据类型picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      dataTypeIndex: e.detail.value
    })
  },
  bindTypePickerChange:function(e){
    console.log('词条类型picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      typeIndex: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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