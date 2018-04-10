// pages/allQuestions/allQuestions.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    postArray:[],
    replyArray:[],
    userArray:[],
  },
  postItemClick: function (e) {
    var postIndex = e.currentTarget.id;
    //console.log("sdfasdfasdfasd:"+postIndex);
    var tmpReplyArray = [];
    var naviData = {};
    // console.log("replyArrkkkkkkkkkkk");
    // console.log(this.data.replyArray);
    for (var i = 0; i < this.data.postArray.length; ++i) {
      if (this.data.postArray[i].postId == postIndex) {
        var tmpJson = this.data.postArray[i];
        naviData["postData"] = tmpJson;
        for (var j = 0; j < tmpJson.postReplyArray.length; ++j) {
          tmpReplyArray.push(this.data.replyArray[tmpJson.postReplyArray[j]]);
        }
        naviData["replyArray"] = tmpReplyArray;

        var tmpStr = JSON.stringify(naviData);
        // console.log("tmpStr:"+tmpStr);
        //wx.navigateTo({ url: "../questionPage/questionPage?postInfo=" + tmpStr, });
        wx.navigateTo({
          url: "../questionPage/questionPage?postInfo=" + tmpStr,
          success: function (res) {
            console.log(res)
          },
          fail: function (err) {
            console.log(err)
          }
        });
        //break;
        //console.log("tmpStr:" + naviData);
      }
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var tmpPostArr=wx.getStorageSync("postArr");
      //this.setData({postArray:tmpPostArr});
      //wx.setStorageSync("postArr", this.data.postArray);
      var tmpReplyArr=wx.getStorageSync("replyArr");
      var tmpUserArr=wx.getStorageSync("userArr");
      this.setData({postArray:tmpPostArr,replyArray:tmpReplyArr,userArray:tmpUserArr});
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