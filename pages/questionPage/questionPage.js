// pages/questionPage/questionPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      postData:{},
      replyArray:[],
      userArray: [],
      postUser:{},
      answer:'',
      isShowToast: false,
      toastTime:2000,
      toastText:"回复不能为空",
      searchFlag:false,
  },
  bindAnserAreaInput:function(e){
    this.setData({answer:e.detail.value});
  },
  bindAnswerAreaBlur: function (e) {
    this.setData({
      answer: e.detail.value
    });
    console.log("blur:"+this.data.answer);
  },
  trimStr : function (str){return str.replace(/(^\s*)|(\s*$)/g, "");},
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
  showToast: function (aToastTime,info) {
    var _this = this;
    // toast时间  
    _this.data.toastTime = parseInt(aToastTime) ? parseInt(aToastTime) : 2000;
    // 显示toast  
    _this.setData({
      isShowToast: true,toastText:info 
    });
    // console.log("showToast:"+this.data.isShowToast);
    // 定时器关闭  
    setTimeout(function () {
      _this.setData({
        isShowToast: false
      });
    }, 3000);
  },  
  replyClick:function(e){
      var answerTrim = this.trimStr(this.data.answer);
      if(answerTrim==""){
          
          //this.setData({ toastTime: 1500, });
        this.showToast(1000, "回复不能为空");
          return ;
      }
      //console.log("aaa");
      // var tmpPostArr1 = (wx.getStorageSync("postArr") || []);
      var tmpPostArr=(wx.getStorageSync("postArr")||[]);
      if (tmpPostArr == undefined || tmpPostArr.length==0){
          console.log("tmpPostArr error");
          return;
      }
      var allReplyArr=(wx.getStorageSync("replyArr")||[]);
      if(allReplyArr==undefined || allReplyArr.length==0){
          console.log("allReplyArr error");
          return;
      }
      var tmpReply = {};
      var tmpReplyId = allReplyArr.length;
      tmpReply['replyId'] = ''+tmpReplyId;
      tmpReply['postId']=this.data.postData.postId;
      tmpReply['replyUserId'] ='1';
      tmpReply['replyTime']=this.formatTime(new Date());
      tmpReply['replyContent'] = this.data.answer;
      // console.log("replyClick, allReplyArr:"+allReplyArr);
      if(allReplyArr != undefined){
        allReplyArr.push(tmpReply);
        // console.log(this.data.replyArray);
      }else {
        console.log("allRepleyArr err");
      }
      // console.log("replyClick, changed allReplyArr:"+allReplyArr);
      //console.log(tmpReplyArr);
      this.data.replyArray.push(tmpReply);
      this.setData({ replyArray: this.data.replyArray});
      wx.setStorageSync("replyArr",allReplyArr);
      tmpPostArr[this.data.postData.postId].postReplyArray.push(tmpReplyId);
      // console.log("tmpPostArr:"+tmpPostArr);
      // console.log(tmpPostArr[this.data.postData.postId].postReplyArray);
      wx.setStorageSync("postArr",tmpPostArr);

      var pages=getCurrentPages();
      var prePage = pages[pages.length-2];
      prePage.setData({ postArray: tmpPostArr, replyArray: allReplyArr});
      if (this.data.searchFlag) {
        var postHomePage = pages[pages.length - 3];
        postHomePage.setData({ postArray: tmpPostArr, replyArray: allReplyArr });
        
      }
      this.showToast(1000, "回复成功");
  },
  replyClick2: function (e) {
    // var tmpPostArr1 = (wx.getStorageSync("postArr") || []);
    var tmpPostArr = (wx.getStorageSync("postArr") || []);
    if (tmpPostArr == undefined || tmpPostArr.length == 0) {
      console.log("tmpPostArr error");
      return;
    }
    var allReplyArr = (wx.getStorageSync("replyArr") || []);
    if (allReplyArr == undefined || allReplyArr.length == 0) {
      console.log("allReplyArr error");
      return;
    }
    
    console.log(allReplyArr);
    console.log(tmpPostArr[this.data.postData.postId].postReplyArray);
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      console.log("morning:"+options.postInfo);
      var userArr=wx.getStorageSync("userArr");
      //this.setData({});
      var json = JSON.parse(options.postInfo);
      //console.log(json);
      //console.log("hello");
      this.setData({ userArray:userArr,postData: json["postData"], replyArray: json["replyArray"]});
      if(json.hasOwnProperty("searchFlag")){
          this.setData({searchFlag:json["searchFlag"]});
      }
      //this.setData({  });
      var tmpPostUserId = this.data.postData["postUserId"];
      console.log("userId:"+tmpPostUserId);
      for (var i = 0; i < this.data.userArray.length;++i){
          //console.log("userId:" + this.data.userArray[i].userId);
          if (tmpPostUserId == this.data.userArray[i].userId){
              //console.log("userId:" + tmpPostUserId);
              this.setData({ postUser: this.data.userArray[i]});
              break;
          }
      }
      this.setData({isShowToast:false});
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