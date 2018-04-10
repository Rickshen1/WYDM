// pages/raiseQuestion/raiseQuestion.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      questionTitle:'',
      questionContent:'',
      questionToastText:'',
      isShowQuestionToast:false,
  },
  bindQuestionTitleInput: function (e) {
    this.setData({ questionTitle: e.detail.value });
  },
  bindQuestionTitleBlur: function (e) {
    this.setData({
      questionTitle: e.detail.value
    });
    console.log("blur:" + this.data.questionTitle);
  },
  bindQuestionContentInput: function (e) {
    this.setData({ questionContent: e.detail.value });
  },
  bindQuestionContentBlur: function (e) {
    this.setData({
      questionContent: e.detail.value
    });
    console.log("blur:" + this.data.questionContent);
  },
  trimStr: function (str) { 
      return str.replace(/(^\s*)|(\s*$)/g, ""); 
  },
  formatTime: function (date) {
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDate()

    var hour = date.getHours()
    var minute = date.getMinutes()
    var second = date.getSeconds()

    return [year, month, day].map(this.formatNumber).join('/') + ' ' + [hour, minute, second].map(this.formatNumber).join(':')
  },

  formatNumber: function (n) {
    n = n.toString()
    return n[1] ? n : '0' + n
  },
  submitQuestionBtn:function(){
    var questionTitleTrim = this.trimStr(this.data.questionTitle);
    var questionContentTrim=this.trimStr(this.data.questionContent);
    if (questionTitleTrim == "" || questionContentTrim=="") {

      //this.setData({ toastTime: 1500, });
      this.showToast(1000, "标题或内容不能为空");
      return;
    }
    //console.log("aaa");
    // var tmpPostArr1 = (wx.getStorageSync("postArr") || []);
    var tmpPostArr = (wx.getStorageSync("postArr") || []);
    if (tmpPostArr == undefined || tmpPostArr.length == 0) {
      console.log("tmpPostArr error");
      return;
    }
    var tmpPost={};
    tmpPost["postId"]=""+tmpPostArr.length;
    tmpPost["postTitle"]=this.data.questionTitle;
    tmpPost["postContent"]=this.data.questionContent;
    tmpPost["postUserId"]="1";
    tmpPost["postTime"] = this.formatTime(new Date());
    tmpPost["hotFlag"]="0";
    tmpPost["postReplyArray"]=[];
    tmpPostArr.push(tmpPost);
    // console.log("tmpPostArr:"+tmpPostArr);
    // console.log(tmpPostArr[this.data.postData.postId].postReplyArray);
    wx.setStorageSync("postArr", tmpPostArr);
    console.log(tmpPostArr);
    var pages = getCurrentPages();
    var prePage = pages[pages.length - 2];
    prePage.setData({ postArray: tmpPostArr,});
    this.showToast(1000, "提交成功");
    console.log("end of sumbit");
  },
  showToast: function (aToastTime, info) {
    var _this = this;
    // toast时间  
    _this.data.toastTime = parseInt(aToastTime) ? parseInt(aToastTime) : 1000;
    // 显示toast  
    _this.setData({
      isShowQuestionToast: true, questionToastText: info
    });
    console.log("showToast:"+this.data.isShowQuestionToast);
    // 定时器关闭  
    setTimeout(function () {
      _this.setData({
        isShowQuestionToast: false
      });
    }, 3000);
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