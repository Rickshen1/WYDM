// pages/postHomePage/postHomePage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    login:false,
    postArray: [
          { postId: "0", postTitle: "什么是RSRP", postContent: "MRO中的RSRP含义是什么？", postUserId: "0", postTime: "2017/1/1 19:30", hotFlag: "0", postReplyArray: [0, 1, 2, 3, 4] },
          { postId: "1", postTitle: "什么是RSRQ", postContent: "MRO中的RSRQ含义是什么？", postUserId: "1", postTime: "2017/1/2 19:30", hotFlag: "0", postReplyArray: [5, 6, 7, 8, 9] },
          { postId: "2", postTitle: "什么是AOA", postContent: "在MRO测量报告中，AOA代表什么", postUserId: "2", postTime: "2017/1/3 19:30", hotFlag: "0", postReplyArray: [10, 11, 12, 13, 14] },
          { postId: "3", postTitle: "什么是TA", postContent: "在实际测量报告中，AOA表示什么", postUserId: "3", postTime: "2017/1/4 19:30", hotFlag: "0", postReplyArray: [15, 16, 17, 18, 19] },
          { postId: "4", postTitle: "CI和ENBID转换关系是什么", postContent: "如题。CI如何转换为ENBID", postUserId: "4", postTime: "2017/1/5 19:30", hotFlag: "0", postReplyArray: [20, 21, 22, 23, 24] },
          { postId: "5", postTitle: "拨打号码不存在", postContent: "用移动volte几年了，至今还有这样的问题，偶尔打对方手机会提示你拨打的号码不存在，然而用GSM拨打或其他电联卡拨打又是正常的，有甚者在某基站下，根本不能发起volte呼叫，几声盲音就断线了，有几次通话中突然无4G，也不回落GSM，就这样莫名其妙断线。不过总体还是有进步，以前volte初期那种通话断断续续还带点金属音没有了。 ", postUserId: "5", postTime: "2017/1/6 19:30", hotFlag: "1", postReplyArray: [25, 26, 27, 28, 29] },
          { postId: "6", postTitle: "什么指令可以开通电信VOLTE", postContent: "如题。", postUserId: "6", postTime: "2017/1/7 19:30", hotFlag: "1", postReplyArray: [30, 31, 32, 33, 34] },
          { postId: "7", postTitle: "诺西MCPA的两个天线口一样吗", postContent: "诺西MCPA的两个天线口一样吗", postUserId: "7", postTime: "2017/1/8 19:30", hotFlag: "1", postReplyArray: [35, 36, 37, 38, 39] },
          { postId: "8", postTitle: "政企200M专线的上连是一级光分还是二级光分", postContent: "政企200M专线的上连是一级光分还是二级光分", postUserId: "8", postTime: "2017/1/9 19:30", hotFlag: "1", postReplyArray: [40, 41, 42, 43, 44] },
          { postId: "9", postTitle: "单站验证过程中，上传或下载速度不达标，哪些原因导致？", postContent: "单站验证过程中，上传或下载速度不达标，哪些原因导致？", postUserId: "9", postTime: "2017/1/10 19:30", hotFlag: "1", postReplyArray: [45, 46, 47, 48, 49] },
    ],
    replyArray: [{ replyId: "0", postId: "0", replyUserId: "1", replyTime: "2017/1/2 19:30", replyContent: "RSRP定义为在考虑测量的频带上，承载小区专属参考信号的资源单元（RE）的功率（W）的线性平均值,是反映服务小区覆盖的主要指标。" },
    { replyId: "1", postId: "0", replyUserId: "2", replyTime: "2017/1/3 19:30", replyContent: "rsrp表示OMC-R统计周期内满足取值范围的按照分区间统计UE参考信号接收功率的样本个数。" },
    { replyId: "2", postId: "0", replyUserId: "3", replyTime: "2017/1/4 19:30", replyContent: "RSRP该数据可用于评估LTE小区的覆盖情况，根据不同场强区间分布比例可判断该小区的大致覆盖范围。" },
    { replyId: "3", postId: "0", replyUserId: "4", replyTime: "2017/1/5 19:30", replyContent: "同意楼上天线遮挡及硬件故障会造成信号弱，容易产生掉话及降低接通率，用于检查小区覆盖盲点/弱覆盖区域。通过源小区和邻区RSRP可进行导频污染分析。" },
    { replyId: "4", postId: "0", replyUserId: "5", replyTime: "2017/1/6 19:30", replyContent: "参考信号功率" },
    { replyId: "5", postId: "1", replyUserId: "0", replyTime: "2017/1/7 19:30", replyContent: "青霞姐问的RSRQ应该是参考信号接收质量" },
    { replyId: "6", postId: "1", replyUserId: "2", replyTime: "2017/1/8 19:30", replyContent: "RSRQ表示OMC-R统计周期内满足取值范围的按照分区间统计下行参考信号接收质量的样本个数。" },
    { replyId: "7", postId: "1", replyUserId: "3", replyTime: "2017/1/9 19:30", replyContent: "RSRQ每个dB一个区间，从-19.5开始。" },
    { replyId: "8", postId: "1", replyUserId: "4", replyTime: "2017/1/10 19:30", replyContent: "青霞头像好漂亮。RSRQ可用于判断基站下行参考信号接收质量，用于小区间切换和重选的判断和分析。" },
    { replyId: "9", postId: "1", replyUserId: "5", replyTime: "2017/1/11 19:30", replyContent: "我的头像也不错啊。" },
    { replyId: "10", postId: "2", replyUserId: "0", replyTime: "2017/1/12 19:30", replyContent: "学友问的是天线到达角吧。这是一个MRO里的测量量。" },
    { replyId: "11", postId: "2", replyUserId: "1", replyTime: "2017/1/13 19:30", replyContent: "MR.AOA定义了一个用户相对参考方向逆时针方向的估计角度,规定参考方向应为正北方向。" },
    { replyId: "12", postId: "2", replyUserId: "3", replyTime: "2017/1/14 19:30", replyContent: "aoa适用于eNodeB具有多天线的情况，当天线个数小于等于2时，本测量项取值为NIL。" },
    { replyId: "13", postId: "2", replyUserId: "4", replyTime: "2017/1/15 19:30", replyContent: "mr里AOA表示OMC-R统计周期内满足取值范围条件的按照分区间统计天线到达角的样本个数。" },
    { replyId: "14", postId: "2", replyUserId: "5", replyTime: "2017/1/16 19:30", replyContent: "MR里AOA取值范围分区间，从0度到小于5度为一个区间，对应MR.AOA.00；355度到小于360度为一个区间，对应MR.AOA.71，依此类推。" },
    { replyId: "15", postId: "3", replyUserId: "4", replyTime: "2017/1/17 19:30", replyContent: "楼主问的是Tadv吧。Tadv在规范里好像叫时间提前量。" },
    { replyId: "16", postId: "3", replyUserId: "5", replyTime: "2017/1/18 19:30", replyContent: "Tadv定义为UE用于调整其主小区PUCCH/PUSCH/SRS上行发送的时间。" },
    { replyId: "17", postId: "3", replyUserId: "6", replyTime: "2017/1/19 19:30", replyContent: "Tadv具体计算方法为：在随机接入过程，eNodeB通过测量接收到导频信号来确定时间提前值" },
    { replyId: "18", postId: "3", replyUserId: "7", replyTime: "2017/1/20 19:30", replyContent: "Tadv本次得到的最新的时间提前量即为上次记录的时间提前量与本次eNodeB测量得到的调整值之和。" },
    { replyId: "19", postId: "3", replyUserId: "8", replyTime: "2017/1/21 19:30", replyContent: "Tadv测量数据可用于确定UE距离基站的远近，实现小区的覆盖分析，判断是否需要对小区天线做出调整，考察基站的覆盖区域是否合理，是否存在过覆盖和覆盖阴影区等问题，还可以利用其辅助提供位置服务。" },
    { replyId: "20", postId: "4", replyUserId: "9", replyTime: "2017/1/22 19:30", replyContent: "应该是倍数关系好像" },
    { replyId: "21", postId: "4", replyUserId: "5", replyTime: "2017/1/23 19:30", replyContent: "CI等于ENBID乘以256加上小区号" },
    { replyId: "22", postId: "4", replyUserId: "6", replyTime: "2017/1/24 19:30", replyContent: "CI除以256取整等于ENBID" },
    { replyId: "23", postId: "4", replyUserId: "7", replyTime: "2017/1/25 19:30", replyContent: "CI右移几位就是ENBID" },
    { replyId: "24", postId: "4", replyUserId: "8", replyTime: "2017/1/26 19:30", replyContent: "楼上说的对，一般右移8位，也有例外" },
    { replyId: "25", postId: "5", replyUserId: "9", replyTime: "2017/1/27 19:30", replyContent: "可能跟手机也有关系，比如突然无4G，通话跟着就掉线了，不切换2G继续通话" },
    {
      replyId: "26", postId: "5", replyUserId: "6", replyTime: "2017/1/28 19:30", replyContent: "福建移动VOLTE主叫从来没有你说的情况，你这个问题不是移动VOLTE的问题，是当地设备和网优不行，去了江西我明显感觉江西移动VOLTE用起来怪怪的"},
{replyId: "27", postId: "5", replyUserId: "7", replyTime: "2017/1/29 19:30", replyContent: "感觉移动volte视频电话很渣，还没有微信视频清晰，画面有时一块一块马赛克" },
    { replyId: "28", postId: "5", replyUserId: "8", replyTime: "2017/1/30 19:30", replyContent: "信号好坏跟手机有关系，我这个手机在24楼顶4G满格，另一个手机来回跳有时还无服务" },
    { replyId: "29", postId: "5", replyUserId: "9", replyTime: "2017/1/31 19:30", replyContent: "习惯了volte拨号的快速，gsm拨号接通要好几秒" },
    { replyId: "30", postId: "6", replyUserId: "7", replyTime: "2017/2/1 19:30", replyContent: "KTVOLTE到10001，但是不一定成功" },
    { replyId: "31", postId: "6", replyUserId: "8", replyTime: "2017/2/2 19:30", replyContent: "辽宁这边是 KTVOLTE18 你可以试试在后面加数字具体是多少就不好说了" },
    {
      replyId: "32", postId: "6", replyUserId: "9", replyTime: "2017/2/3 19:30", replyContent: "反正我打电信号码，没感觉出什么，同时我要给联通2G正一下名，广东可能例外 在我这边不管室外室内联通2G基本都能满格（省会除外省会有精品3G） 语音效果还行…… 没有某些人说的那么不堪"},
{replyId: "33", postId: "6", replyUserId: "0", replyTime: "2017/2/4 19:30", replyContent: "信号好坏跟手机有关系，我这个手机在24楼顶4G满格，另一个手机来回跳有时还无服务" },
    { replyId: "34", postId: "6", replyUserId: "1", replyTime: "2017/2/5 19:30", replyContent: "感觉移动volte视频电话很渣，还没有微信视频清晰，画面有时一块一块马赛克" },
    { replyId: "35", postId: "7", replyUserId: "2", replyTime: "2017/2/6 19:30", replyContent: "天线接口6个，3个全双工收发和3个多功能接收器，嵌入式AISG2.0支持" },
    { replyId: "36", postId: "7", replyUserId: "3", replyTime: "2017/2/7 19:30", replyContent: "RRH应该是室分的两个扇区吧<div>原理应该和RRU一样，只是一个是宏站一个是室分</div><div>RRU上6个接口，3个是TX/RX，3个是RX  </div><div>到目前为止我们只试过一个主集和一个分集，一个集，不用分集</div><div>经验少其它的还没见过</div>" },
    { replyId: "37", postId: "7", replyUserId: "4", replyTime: "2017/2/8 19:30", replyContent: "可以带两根主线，没什么区别" },
    {
      replyId: "38", postId: "7", replyUserId: "5", replyTime: "2017/2/9 19:30", replyContent: "都可以的，现在的设备都支持了，以前Ultrasite的RTGA有时候需要区分，不然会引发功率过高的告警，甚至烧毁合路器。"},
{replyId: "39", postId: "7", replyUserId: "6", replyTime: "2017/2/10 19:30", replyContent: "RRH的两个出口用两进两出电桥合一下，出来两根线，都是主线，随便带天线" },
{replyId: "40", postId: "8", replyUserId: "2", replyTime: "2017/2/11 19:30", replyContent: "不用分光器，直接机房跳纤到全业务光交在到用户端。前题是光纤都有纤芯资源，用户那端，大部分都是新布放光缆。" },
    { replyId: "41", postId: "8", replyUserId: "3", replyTime: "2017/2/12 19:30", replyContent: "楼上搞笑吧，PON业务不直接用分光器还直接接PON口啊。你爱接几级分光器就接几级分光器，技术层面这些光层的东西对数据什么影响都没有。主要还是看当地的分光指导意见，顶多再看个光衰。不过既然有二级分光，那一级分光器想必是不可能接业务，只能挂二级分光器了。" },
    { replyId: "42", postId: "8", replyUserId: "1", replyTime: "2017/2/13 19:30", replyContent: "广州是在机房一级分光上出线，内地是光交箱二级光分下出线" },
    { replyId: "43", postId: "8", replyUserId: "5", replyTime: "2017/2/14 19:30", replyContent: "为保证质量，一般情况下使用一级分光，重要用户可使用二个一级分光光路进行互保。" },
    { replyId: "44", postId: "8", replyUserId: "6", replyTime: "2017/2/15 19:30", replyContent: "楼主首先需要弄明白客户需要的200M专线是什么类型的，是普通的宽带还是互联网。不过目前GPON技术分光器只能给用户开到100M，楼主所说的200M应该是政企客户需要的互联网专线，这个是需要上联至运营商通信机房内城域网交换机的，需要配置独立IP地址。所以应该是不能接分光器。" },
    { replyId: "45", postId: "9", replyUserId: "2", replyTime: "2017/2/16 19:30", replyContent: "首先是无线环境（信号强度和质量），干扰情况；其次调度和算法也是影响的主要因素。。" },
    { replyId: "46", postId: "9", replyUserId: "3", replyTime: "2017/2/17 19:30", replyContent: "很多原因。信号、干扰、邻区配置、参数配置和基站配置等多种原因" },
    { replyId: "47", postId: "9", replyUserId: "4", replyTime: "2017/2/18 19:30", replyContent: "单站与传输网 核心网的数据配置与优化，传输资源配置和传输通道码率等因素都可能影响" },
    { replyId: "48", postId: "9", replyUserId: "5", replyTime: "2017/2/19 19:30", replyContent: "这个问题太广泛了，硬件、无线环境、系统都有可能有问题" },
    { replyId: "49", postId: "9", replyUserId: "6", replyTime: "2017/2/20 19:30", replyContent: "上传或下载速度指标要求太高" },
],

    userArray: [{ userId: "0", userName: "刘德华", userCom: "海南分公司", userIcon: "../img/user1.png" },
    { userId: "1", userName: "林青霞", userCom: "广东分公司", userIcon: "../img/user2.png" },
    { userId: "2", userName: "张学友", userCom: "福建分公司", userIcon: "../img/user3.png" },
    { userId: "3", userName: "吴多发", userCom: "北京分公司", userIcon: "../img/user4.png" },
    { userId: "4", userName: "梁静茹", userCom: "天津分公司", userIcon: "../img/user5.png" },
    { userId: "5", userName: "张曼玉", userCom: "上海分公司", userIcon: "../img/user6.png" },
    { userId: "6", userName: "阿杜", userCom: "河南分公司", userIcon: "../img/user7.png" },
    { userId: "7", userName: "钟楚红", userCom: "黑龙江分公司", userIcon: "../img/user8.png" },
    { userId: "8", userName: "王祖贤", userCom: "辽宁分公司", userIcon: "../img/user9.png" },
    { userId: "9", userName: "林依晨", userCom: "吉林分公司", userIcon: "../img/user10.png" },
    { userId: "10", userName: "黎明", userCom: "湖南分公司", userIcon: "../img/user11.png" },],
  },
  testBtnClick:function(e){
    var tmpPostArr = (wx.getStorageSync("postArr") || []);
    if (tmpPostArr == undefined || tmpPostArr.length == 0) {
      console.log("tmpPostArr error");
      return;
    }
    console.log(tmpPostArr);
    var allReplyArr = (wx.getStorageSync("replyArr") || []);
    if (allReplyArr == undefined || allReplyArr.length == 0) {
      console.log("allReplyArr error");
      return;
    }
    console.log(allReplyArr);
  },
  raiseQuestionBtn:function(){
    wx.navigateTo({ url:"../raiseQuestion/raiseQuestion",});
  },
  allQuestionBtn:function(){
    wx.navigateTo({url:"../allQuestions/allQuestions",});
  },
  navigateToSearchQuestion:function(){
    wx.navigateTo({url:"../searchQuestion/searchQuestion"});
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
      // wx.setStorageSync("latestPostArr",this.data.latestPostArray);
      // wx.setStorageSync("hotPostArr", this.data.hotPostArray);
      if(!this.data.login){
        wx.setStorageSync("postArr", this.data.postArray);
        wx.setStorageSync("replyArr", this.data.replyArray);
        wx.setStorageSync("userArr", this.data.userArray);
      }
      this.setData({login:true});
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