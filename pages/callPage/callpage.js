// pages/myPage/myPage.js

Page({
  /**
   * 页面的初始数据
   */
  data: {
    searchInput: "",
    btnText: "justTest",
    addBtnText:"自定义词条",
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
    xingNengArr: [{ code: "ENBAA16", importance: "B", englishName: "ElementType", chineseName: "北向网元标识", meanning: "用于区分北向文件中的网元类型标识（ENB或NanoCell），取值范围：ENUMERATED { ENB,NanoCell}", dataType: "枚举", unit: "", remark: "" },
    { code: "ENBAJ111", importance: "B", englishName: "CellType", chineseName: "小区类型", meanning: "小区类型参数，用于识别3D-MIMO等不同小区类型，取值范围：ENUMERATED {NormalCell,MassiveMimoCell,Other}NormalCell ：表示普通小区（非3D-MIMO小区）MassiveMimoCell：表示3D-MIMO小区Other： 其他，预留", dataType: "枚举", unit: "", remark: "" },
    { code: "ENBNB08", importance: "B", englishName: "ReferenceSignalPower", chineseName: "参考信号功率", meanning: "协议参数：nrs-Power-r13小区相关的下行参考信号的发射功率（-60至50）。参见 3GPP TS 36.331。", dataType: "整数", unit: "dBm", remark: "继承自EutranGenericCell" },
    { code: "ENBNB09", importance: "B", englishName: "AntennaPortsCount", chineseName: "小区支持的发射天线端口数目", meanning: "规范参数名称：antennaPortsCountParameter represents the number of cell specific antenna ports where an1 corresponds to 1, an2 to 2 antenna ports etc. see TS 36.211, 6.2.1.取值范围说明：ENUMERATED {an1, an2, an4, spare1}", dataType: "枚举", unit: "", remark: "" },
    { code: "ENBNB10", importance: "B", englishName: "NPrachCPLength", chineseName: "NPRACH循环前缀长度", meanning: "NPRACH循环前缀长度，对应协议nprach-CP-Length-r13 参数取值范围:ENUMERATED {us66dot7, us266dot7}", dataType: "枚举", unit: "", remark: "" },
    { code: "ENBNB11", importance: "B", englishName: "SiRepetitionPattern", chineseName: "SI重复模式", meanning: "SI（系统信息）重复模式，对应协议si-RepetitionPattern-r13参数。List of structure {SIBType: ENUMERATEDSiRepetitionPattern:  ENUMERATED}SIBType:=ENUMERATED {SIB2,SIB3}SiRepetitionPattern:= ENUMERATED{every2ndRF, every4thRF, every8thRF, every16thRF }", dataType: "结构列表", unit: "", remark: "" },
    { code: "ENBNB12", importance: "B", englishName: "SiPeriodicity", chineseName: "SI周期", meanning: "SI（系统信息）的发送周期，对应协议si-Periodicity-r13参数。List of structure {SIBType: ENUMERATEDSiPeriodicity:  ENUMERATED}SIBType:=ENUMERATED {SIB2,SIB3}SiPeriodicity:= ENUMERATED｛rf64, rf128, rf256, rf512, rf1024, rf2048, rf4096}", dataType: "结构列表", unit: "", remark: "" },
    { code: "ENBNB13", importance: "B", englishName: "SchedulingInfoSIB1", chineseName: "SIB1调度信息", meanning: "该参数为SIB1调度信息，该参数同时指示了SIB1的MCS和重复次数,对应协议schedulingInfoSIB1-r13参数，取值范围: INTEGER [0..15] ", dataType: "整数", unit: "", remark: "" },
],

    resourceArr: [{ code: "ENBNB14", importance: "B", englishName: "SiWindowLength", chineseName: "SI窗口长度", meanning: "该参数为系统消息的窗口长度，单位为毫秒。 对应协议si-WindowLength-r13 参数，取值范围:       ENUMERATED {ms160,  ms320,  ms480, ms640,  ms960, ms1280, ms1600}", dataType: "枚举", unit: "ms", remark: "" },
    { code: "ENBNB15", importance: "CB", englishName: "SiRadioFrameOffset", chineseName: "SI无线帧号偏移", meanning: "该参数为系统消息的无线帧号偏移，用于计算系统消息窗的起点。不携带表示没有偏移。 对应协议si-RadioFrameOffset-r13  参数，取值范围:       INTEGER (1..15)  ", dataType: "整数", unit: "", remark: "" },
    { code: "ENBNB16", importance: "B", englishName: "DrxCycleLength", chineseName: "DRX循环周期长度", meanning: "DRX循环周期长度，对应协议drx-Cycle-r13参数，取值范围: ENUMERATED{ sf256, sf512, sf1024, sf1536, sf2048, sf3072,  sf4096, sf4608, sf6144, sf7680, sf8192, sf9216}", dataType: "枚举", unit: "", remark: "" },
    { code: "ENBNB17", importance: "B", englishName: "DrxOnDurationTimer", chineseName: "在DRX循环周期中UE苏醒的时间长度", meanning: "指示从DRX周期开始连续的PDCCH子帧数，是固定会苏醒的接收PDCCH。对应协议onDurationTimer参数，取值范围: ENUMERATED { pp1, pp2, pp3, pp4, pp8, pp16, pp32}", dataType: "枚举", unit: "", remark: "" },
    { code: "ENBNB18", importance: "B", englishName: "DrxInactivityTimer", chineseName: "DRX非激活定时器", meanning: "指示当成功对一个指示上行/下行新数据传输的PDCCH解码后，UE应连续监听PDCCH的PDCCH子帧数。对应协议drx-InactivityTimer参数，取值范围: ENUMERATED { pp0, pp1, pp2, pp3, pp4, pp8, pp16, pp32}", dataType: "枚举", unit: "", remark: "" },
    { code: "ENBNB19", importance: "B", englishName: "DrxRetransmissionTimer", chineseName: "DRX的HARQ重传定时器", meanning: "指示一旦UE期望接收到下行重传，UE应连续监听PDCCH的最大PDCCH子帧数。对应协议drx-RetransmissionTimer参数，取值范围: ENUMERATED {  pp0, pp1, pp2, pp4, pp6, pp8, pp16, pp24,pp33}", dataType: "枚举", unit: "", remark: "" },
    { code: "ENBNB20", importance: "B", englishName: "DrxUlRetransmissionTimer", chineseName: "drx上行重传定时器", meanning: "drx上行重传定时器,对应协议drx-ULRetransmissionTimer-r13参数，取值范围: ENUMERATED {            pp0, pp1, pp2, pp4, pp6, pp8, pp16, pp24,            pp33, pp40, pp64, pp80, pp96,            pp112, pp128, pp160, pp320}", dataType: "枚举", unit: "", remark: "" },
    { code: "ENBNB21", importance: "CB", englishName: "DlGapThreshold", chineseName: "下行GAP门限", meanning: "该参数为下行是否添加GAP的NPDCCH的Rmax的门限，只有Rmax超过该门限时才会添加GAP。 对应协议dl-GapThreshold-r13 参数，取值范围:  ENUMERATED {n32, n64, n128, n256}", dataType: "枚举", unit: "", remark: "" },
],
    
    zhiBiaoArr: [{ code: "ENBNB22", importance: "CB", englishName: "DlGapPeriodicity", chineseName: "下行Gap周期", meanning: "该参数为下行Gap的周期，单位为子帧 对应协议 dl-GapPeriodicity-r13 参数，取值范围:  ENUMERATED {sf64, sf128, sf256, sf512}", dataType: "枚举", unit: "", remark: "" },
    { code: "ENBNB23", importance: "CB", englishName: "DlGapDurationCoeff", chineseName: "下行Gap持续时间系数", meanning: "该参数为计算下行Gap持续时间的系数。公式为：该系数*下行GAP周期。  对应协议  dl-GapDurationCoeff-r13 参数，取值范围:  ENUMERATED {oneEighth, oneFourth, threeEighth, oneHalf}", dataType: "枚举", unit: "", remark: "" },
    { code: "ENBNC08", importance: "B", englishName: "TimeAlignmentTimer", chineseName: "TA定时器", meanning: "该参数用来控制UE多长时间认为服务小区是上行同步的，单位为子帧。对应协议TimeAlignmentTimer参数，取值范围:ENUMERATED { sf500, sf750, sf1280, sf1920, sf2560, sf5120,  sf10240, infinity}", dataType: "枚举", unit: "", remark: "" },
    { code: "ENBNE05", importance: "B", englishName: "CellBarred", chineseName: "小区禁止接入指示", meanning: "该参数是小区禁止接入指示。小区禁止接入指示为barred时，UE不能选择和重选择这些小区，即使是紧急呼叫。对应协议cellBarred-r13参数，取值范围: ENUMERATED {Barred,NotBarred}", dataType: "枚举", unit: "", remark: "" },
    { code: "ENBNE06", importance: "B", englishName: "ABEnabledSwitch", chineseName: "接入禁止使能", meanning: "接入禁止使能 对应协议ab-Enabled-r13 参数。Value TRUE indicates that access barring is enabled and that the UE shall acquire SystemInformationBlockType14-NB before initiating RRC connection establishment or resume. ENUMERATED {true,false}", dataType: "枚举", unit: "", remark: "" },
    { code: "ENBNE07", importance: "CB", englishName: "CategoryofUeAB", chineseName: "接入限制UE类型", meanning: "该参数指示具有AB （Access barring）应用的UE的类别，其中类型a针对所有UE，类型b对应那些既不在归属PLMN也不在等于它的PLMN的UE，类型c对应UE既不在USIM卡中漫游在运营商定义的PLMN列表所在国家的首选PLMN中，也不在它们的归属PLMN或等于归属PLMN的PLMN中。参见协议ab-Category-r13参数，取值范围: ENUMERATED {a, b, c}", dataType: "枚举", unit: "", remark: "ABEnabledSwitch打开后起作用" },
    { code: "ENBNE08", importance: "CB", englishName: "BarringExceptionData", chineseName: "ExceptionData访问限制指示", meanning: "指示ExceptionData是否被访问限制,对应协议ab-BarringForExceptionData-r13参数，取值范围:  ENUMERATED {true,false}", dataType: "枚举", unit: "", remark: "ABEnabledSwitch打开后起作用" },
    { code: "ENBNE09", importance: "CB", englishName: "AccessBarringBitmapAC0to9", chineseName: "AB限制位图(AC0-AC9)", meanning: "访问禁止类AC0-9第一位/最左边的是AC 0,第二位是AC1,依次类推。对应协议ab-BarringBitmap-r13参数，取值范围: BIT STRING (SIZE(10))；", dataType: "字符串", unit: "", remark: "ABEnabledSwitch打开后起作用注：10个0或1组成的字符串" },
    { code: "ENBNE10", importance: "CB", englishName: "AccessBarringBitmapAC11to15", chineseName: "AB限制位图(AC11-AC15)", meanning: "访问禁止类AC11-15。第一个位表示类别11，第二位表示类别12，等等 .对应协议ab-BarringForSpecialAC-r13参数，取值范围: BIT STRING (SIZE(5))", dataType: "字符串", unit: "", remark: "ABEnabledSwitch打开后起作用注：5个0或1组成的字符串" },
],
    
    dataMap: new Map(),
    remoteIpPort: getApp().globalData.remoteIp,
    list: [
      { 'id': 0, 'hidden': true , title:"性能测量规范",arrData:[],},
      { 'id': 1, 'hidden': true, title: "配置资源模型", arrData: [],},
      { 'id': 2, 'hidden': true, title: "指标集", arrData: [],},
    ],
    
  },
  addBtnClick:function(e){
    wx.navigateTo({url:"../addItem/addItem"});
  },
  navigateToSearch: function (e) {
    wx.navigateTo({
      url: '../search/search',
    })
  },
  btnClick: function () {
    var arr = (wx.getStorageSync("allDataList")||[]);
    console.log(arr);
  },
  itemClick: function (e) {
    var idx=e.currentTarget.id;
    var typeid=e.currentTarget.dataset.typeid;
    //console.log("typeid:"+typeid);
    var tmpJson=this.data.list[typeid].arrData[idx];
    var tmpStr=JSON.stringify(tmpJson);
    wx.navigateTo({url:"../displayData/displayData?node="+tmpStr,});
  },
  
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    this.data.list[0].arrData = this.data.xingNengArr;
    this.data.list[1].arrData=this.data.resourceArr;
    this.data.list[2].arrData = this.data.zhiBiaoArr;
    wx.setStorageSync("allDataList",this.data.list);
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

  },
  
  hiddenBtn: function (e) {
    var that = this;
    // 获取事件绑定的当前组件
    var index = e.currentTarget.dataset.index;
    // 获取list中hidden的值
    // 隐藏或显示内容
    that.data.list[index].hidden = !that.data.list[index].hidden;
    that.setData({
      list: that.data.list
    })
  },
  
})