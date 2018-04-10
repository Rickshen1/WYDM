// pages/searchQuestion/searchQuestion.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content_show: true,
    searchValue: '',
    
    
    hitData: [],
    showHotSearch: true,
    hotSearchItems: ["RSRP", "RSRQ", "AOA", "TA", "ENBID"],
    postArray: [],
    userArray:[],
    replyArray:[],
  },
  wxSearchBlur:function(e){
      this.setData({searchValue:e.detail.value});
  },
  wxSearchInput:function(e){
      this.search(e.detail.value);
  },
  itemClick:function(e){
    var hotItem = e.currentTarget.dataset.hot;
      this.search(hotItem);
  },
  search:function(searchKey){
      var searchKeyTrim=searchKey.trim();
      if(searchKeyTrim==""){
          this.setData({ hitData: [], showHotSearch:true,});
          return;
      }
      var searchKeyArr = searchKey.split(" ");
      var tmpHitData=[];
      for (var postIndex = 0; postIndex < this.data.postArray.length; ++postIndex) {
          for(var keyIndex=0;keyIndex<searchKeyArr.length;++keyIndex){
              if (this.data.postArray[postIndex].postTitle.indexOf(searchKeyArr[keyIndex])!=-1){
                  tmpHitData.push(this.data.postArray[postIndex]);
                  break;
              }
          }
      }
      if(tmpHitData.length>0){
        this.setData({ hitData: tmpHitData, showHotSearch:false});
      }else{
        this.setData({ hitData: [], showHotSearch: true });
      }
      
  },
  trimStr: function (str) { return str.replace(/(^\s*)|(\s*$)/g, ""); },
  hitItemClick:function(e){
    var postIndex = e.currentTarget.dataset.postid;
    var hitDataIndex=e.currentTarget.id;
    console.log("postidx:"+postIndex);
    console.log("hitDataIndex:"+hitDataIndex);
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
        naviData["searchFlag"] = true;
        //naviData["hitDataIndex"] = hitDataIndex;
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
      var allPostArr=(wx.getStorageSync("postArr")||[]);
      var tmpReplyArr=(wx.getStorageSync("replyArr")||[]);
      var tmpUserArr = (wx.getStorageSync("userArr")||[]);
      this.setData({postArray:allPostArr,replyArray:tmpReplyArr,userArray:tmpUserArr});
      console.log("searchQuestion aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
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