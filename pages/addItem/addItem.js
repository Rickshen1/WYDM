// pages/addItem/addItem.js
var demoData = require('../../data/demo_data.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShowToast: false,
    toastText: 'toast',
    importanceArray: ["A", "B", "BC"],
    importanceIndex: 0,
    dataTypeArray: ["字符串", "整型", "枚举", "浮点型", "结构列表"],
    dataTypeIndex: 0,
    //typeArray: ["性能测量规范", "配置资源模型", "指标集"],//注意：分类顺序要和callPage的list中的顺序一致，后面将自定义词条添加到callPage的list会用到list的下标。
    //typeIndex: 0,
    chineseName: '',
    englishName: '',
    code: '',
    unit: '',
    remark: '',
    meanning: '',
    class1id: 1,
    class2id: 1,
    multiIndex: [0, 0],
    multiArray: [[], []],
    class2List: []
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
  chineseNameInput: function (e) {
    this.setData({ chineseName: e.detail.value, });
  },
  englishNameInput: function (e) {
    this.setData({ englishName: e.detail.value, });
  },
  unitInput: function (e) {
    this.setData({ unit: e.detail.value, });
  },
  remarkInput: function (e) {
    this.setData({ remark: e.detail.value });
  },
  meanningInput: function (e) {
    this.setData({ meanning: e.detail.value });
  },
  codeInput: function (e) {
    this.setData({ code: e.detail.value });
  },
  submitBtnClick: function (e) {
    console.log("submitBtnClick");
    if (this.data.chineseName == '' || this.data.meanning == '') {
      this.showToast(1000, '中文名或含义不能为空');
      return;
    }
    var word = {};
    var temclass2 = demoData.list2Arr.filter((item) => {
     return item.id === this.data.class2id;
    })
    let newid=1;
    let newindex="";
    if (temclass2.length>0){ 
      newindex = temclass2[0].index;
    }
    if (demoData.list3Arr.length>0){
      let id = demoData.list3Arr[demoData.list3Arr.length - 1].id;//找到最后一条记录，取它的ID，
      newid = parseInt(id) + 1; //id自增1
    } 
    
    word["id"] = newid;        //id自增1
    word["typeid"] = this.data.class1id; //大类ID
    word["index"] = newindex; //二级类index 文本索引 
    word["chineseName"] = this.data.chineseName;
    word["englishName"] = this.data.englishName;
    word["code"] = this.data.code;
    word["unit"] = this.data.unit;
    word["remark"] = this.data.remark;
    word["importance"] = this.data.importanceArray[this.data.importanceIndex];
    word["dataType"] = this.data.dataTypeArray[this.data.dataTypeIndex];
    word["meanning"] = this.data.meanning;
    console.log(word);
    //return;
    //已经保存方式默认都改存到索引0里面
    var allGuiFanArr = (wx.getStorageSync("allDataList") || []);
    console.log(allGuiFanArr.length);
    //return;
    allGuiFanArr.push(word); //插入到最后
    console.log(allGuiFanArr.length);
    //return;
    wx.setStorageSync("allDataList", allGuiFanArr);
    // var pages = getCurrentPages();
    // console.log(pages);
    // var callPage = pages[pages.length - 2];
    // console.log(callPage);
    //callPage.setData({ list: allGuiFanArr });
    //
    this.showToast(1000, "提交成功");
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
  bindTypePickerChange: function (e) {
    console.log('词条类型picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      typeIndex: e.detail.value
    })
  },
  //动态加载第2类列表
  searchClass2Info: function (type_id) {
    var that = this;
    if (type_id) {
      //console.log(type_id)
      this.setData({
        class1id: type_id
      })
      var class2_arr = demoData.list2Arr.filter((item) => {
        return item.typeid === type_id;
      })
      //console.log(class2_arr)
      this.setData({
        multiArray: [demoData.list1Arr, class2_arr],
        class2List: class2_arr
      })
    }
  },
  //picker滚动函数
  bindMultiPickerColumnChange: function (e) {
    var that = this;
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var data = {
      multiArray: that.data.multiArray,
      multiIndex: that.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;  //第一列的索引值
    var class1id_tmp = that.data.class1id;　　　　       // 保持之前的 id 
    switch (e.detail.column) {
      case 0:
        var cla1_List = data.multiArray[0];
        var cur_id = cla1_List[e.detail.value]['id'];
        //console.log(cur_id);
        that.setData({
          class1id: cur_id
        })
        if (class1id_tmp != cur_id) {　　　　// 如果不一致则重新请求并赋新值
          //
          this.searchClass2Info(cur_id);
        }
        //第二列默认选择第一个
        data.multiIndex[1] = 0;
        //保存
        this.setData({
          multiIndex: that.data.multiIndex
        });
        break;
      case 1:
        var cla2_List = data.multiArray[1];
        var cur_id = cla2_List[e.detail.value]['id'];
        //console.log(cur_id);
        that.setData({
          class2id: cur_id
        })
        break;
    }
    
  },
  //picker选择完毕
  bindMultiPickerChange: function (e) {
    var that = this; 
    //console.log('picker发送选择改变，携带值为', e.detail.value)
    
    var class2_List = that.data.class2List;
    var select_key = e.detail.value[1];  //第2列的索引
    //
    this.setData({
      multiIndex: e.detail.value,
      class2id: class2_List[select_key]['id']
    })
    console.log('picker发送选择的Class2ID值',that.data.class2id)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var type_id = 1;//默认显示第一个大类
    this.setData({
      class1id: type_id
    })
    var class1_arr = demoData.list1Arr;
    var class2_arr = demoData.list2Arr.filter((item) => {
      return item.typeid === type_id;
    })
    that.setData({
      multiArray: [class1_arr, class2_arr],
      class2List: class2_arr
    })
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