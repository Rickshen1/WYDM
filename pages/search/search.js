// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content_show: true,
    searchValue: '',
    resJsonData:[],
    testVal:'button',
    hitData: [],
    showHotSearch:true,
    hotSearchItems: ["参考信号功率", "最大俯仰角值", "相邻小区的标识", "水平波束宽度","机械偏移"],
    dataForSearch:[
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
    allGuiFanArr: [{ englishName: "UserLabel", chineseName: "用户友好名", meanning: "用户友好名，由EMS厂商自己指定，作为其内部标识，并可被NMS修改。" },
    { englishName: "AdministrativeState", chineseName: "管理状态", meanning: "管理的状态，取值范围为{Locked，Unlocked，ShuttingDown}" },
    { englishName: "OperationalState", chineseName: "运行状态", meanning: "运行的状态，取值范围为{Disabled, Enabled}" },
    { englishName: "RetFlag", chineseName: "电调天线功能标识", meanning: "表示该天线是否具备支持电调的能力。枚举{Enable, Disable}" },
    { englishName: "AntEutranCellList", chineseName: "相关联的小区列表", meanning: "关联属性，是指向该AntennaFunction支持的小区对象的指针集合，其中字符串表示方式为： MCC-MNC-ENODEBID-CID(3GPP TS 36.413)" },
    { englishName: "RetTiltValue", chineseName: "RET俯仰角值", meanning: "给出通过电子手段（如通过RET）调整后的天线的俯仰角值（0～3600）（参见RET TR.25.802第7.7.5.11节）。为运维人员指示天线的当前设置情况，是RET的核心特征。" },
    { englishName: "Bearing", chineseName: "方位", meanning: "天线朝向的方位角度数（0～360度）。注意该方位是真指向（从正北方变化偏移的指南针指向）的。" },
    { englishName: "MaxTiltValue", chineseName: "最大俯仰角值", meanning: "RET系统能够支持的最大俯仰角值（0～3600）（参见RET TR.25.802第7.7.5.11节）。该参数有利于防止操作人员输入任何不现实的RET俯仰角值（retTiltValue），因此能够防止RET单元上的电动机受损（阻塞或燃烧）。" },
    { englishName: "MinTiltValue", chineseName: "最小俯仰角值", meanning: "RET系统能够支持的最小俯仰角值（0～3600,见RET TR.25.802第7.7.5.11节）。该参数有利于防止操作人员输入任何不现实的RET俯仰角值（retTiltValue），因此能够防止RET单元上的电动机受损（阻塞或燃烧）。" },
    { englishName: "MechanicalOffset", chineseName: "机械偏移", meanning: "该参数为不可调俯仰角值（0～3600）。该参数在天线物理安装时指配。任何时间点的实际俯仰角值为机械偏移（mechanicalOffset）和RET俯仰角值（retTiltValue）的和。" },
    { englishName: "RetGroupName", chineseName: "RET组名", meanning: "RET组名为字母、数字等组成的串（80），用于定义一个天线的逻辑组，这些天线可能支持不同的小区。该属性即可以在安装时指定，也可以通过Itf-N接口指配。" },
    { englishName: "Height", chineseName: "高度", meanning: "天线的海拔高度。基站的规划中包含天线高度的要求。该参数也决定了基站的覆盖情况，能够反映到规划工具中。" },
    { englishName: "BaseElevation", chineseName: "地面海拔", meanning: "天线结构底部海拔高度。height属性值减去该属性值就是天线地面高度。" },
    { englishName: "Latitude", chineseName: "纬度", meanning: "天线位置纬度（-90.0000～+90.0000），基于1984年世界大地坐标系全球参照系统(WGS 84)，正数取值区间对应北半球。对于室内分布系统天线，取机房位置对应的维度。" },
    { englishName: "Longitude", chineseName: "经度", meanning: "天线位置经度（-180.0000 ～+180.0000），基于1984年世界大地坐标系全球参照系统(WGS 84)，正数取值区间对应零度以东。对于室内分布系统天线，取机房位置对应的经度。" },
    { englishName: "MaxAzimuthValue", chineseName: "最大方位角", meanning: "RET系统能够支持的方位角的最大变化值（0～3600）。取值为沿方位bearing顺时针改变的角度。" },
    { englishName: "MinAzimuthValue", chineseName: "最小方位角", meanning: "RET系统能够支持的方位角的最小变化值（0～3600）。取值为沿方位bearing逆时针改变的角度。" },
    { englishName: "HorizBeamwidth", chineseName: "水平波束宽度", meanning: "水平平面的3dB功率天线波束宽度（0～360）。" },
    { englishName: "VertBeamwidth", chineseName: "垂直波束宽度", meanning: "垂直平面的3dB功率天线波束宽度（0～180）。" },
    { englishName: "AntNumber", chineseName: "天线型号", meanning: "根据天线厂家信息（如模型号等）识别天线样式，样式名是原文的alpha数字串。" },

    { englishName: "CellLocalId", chineseName: "本地小区标识", meanning: "基站内部小区编号。" },
    { englishName: "CellSize", chineseName: "小区覆盖范围", meanning: "参见TS 36.423中的Cell-Size类型。取值范围为{verysmall, small, medium, large }" },
    {
      englishName: "PlmnIdList", chineseName: "PLMN列表", meanning: "PLMN网络的唯一标识的列表。注：一个小区能够最多包含6个PLMN标识，这是用于支持一个小区最多可被6个运营商的核心网络所使用的情况（参见TS 36.331）。    SystemInformationBlockType1/cellAccessRelatedInformation/plmn- IdentityList 是一个长度为1至6的列表。"
    },
    { englishName: "Tac", chineseName: "跟踪区码", meanning: "PLMN网络的公用跟踪区码（0-65535）。该标识用于跟踪区域。一个小区最多能有1个跟踪区码。（参见TS 36.300）" },
    { englishName: "Pci", chineseName: "物理小区识别码", meanning: "该属性持有小区的物理小区识别码（包括集中式和分布式两种分配情况），取值范围为(0到503)。如果是集中PCI分配（参见TS 36.300），IRPManager通过写入该属性，生成一个具体的值（specific value）。数据类型参见 TS 36.211。" },
    { englishName: "PciList", chineseName: "物理小区识别码列表", meanning: "eNodeB能够分配给pci属性的物理小区识别码的列表（Pci列表长度为1至504）。具体分配的算法并未规定。当且仅当支持分布式物理小区识别码分配方法时，该属性才有效。参见TS 32.500。" },
    { englishName: "MaximumTransmissionPower", chineseName: "最大发射功率", meanning: "在同一时刻，一个小区内所有下行信道的可能最大负载。" },
    { englishName: "ReferenceSignalPower", chineseName: "参考信号功率", meanning: "小区相关的下行参考信号的发射功率（-60至50）。参见 3GPP TS 36.331。" },
    { englishName: "Pb", chineseName: "天线端口信号功率比", meanning: "Pb（0至3）。参见TS 36.213。" },
    { englishName: "RelatedRruList", chineseName: "关联的RRU列表", meanning: "小区关联的RRU资产的DN列表。" },
    { englishName: "RelatedAntennaList", chineseName: "相关联的天线列表", meanning: "该小区相关的一个或多个天线的DN" },
    { englishName: "MbmsSwitch", chineseName: "小区MBMS开关", meanning: "指示该小区是否是开启MBMS功能,枚举{yes、no}" },
    { englishName: "BandIndicator", chineseName: "频段指示", meanning: "整数，取值范围为(1-43)见3GPP TS36.101，TS36.104" },
    { englishName: "Pa", chineseName: "小区PDSCH采用固定功率分配时的PA取值", meanning: "p-a参数取值范围：ENUMERATED {dB-6, dB-4dot77, dB-3, dB-1dot77,dB0, dB1, dB2, dB3}" },
    { englishName: "PuschPcSwitch", chineseName: "上行PUSCH闭环功控开关", meanning: "上行PUSCH闭环功控开关,取值范围: ENUMERATED{ON，OFF}" },
    { englishName: "PucchPcSwitch", chineseName: "上行PUCCH闭环功控开关", meanning: "上行PUCCH闭环功控开关,取值范围: ENUMERATED{ON，OFF}" },
    { englishName: "DrxSwitch", chineseName: "连接态DRX功能开关", meanning: "连接态DRX功能开关,取值范围: ENUMERATED{ON，OFF}" },
    { englishName: "UeInactiveTimer", chineseName: "连接态UE不活动定时器", meanning: "取值范围：INTEGER [0..65535] 连接态UE不活动定时器,如果UE一直都没有接收和发送数据，并且持续时间超过该定时器时长，则释放该UE" },
    { englishName: "SupportRRCNumbers", chineseName: "同时支持RRC连接最大用户数", meanning: "单小区（单载波且不使用CA）可同时支持的最大RRC连接用户数量，为配置值或设备标称值。" },
    { englishName: "SupportActiveRRCNumbers", chineseName: "同时支持RRC激活最大用户数", meanning: "单小区（单载波且不使用CA）可同时支持的最大RRC激活用户数量，是设备标称值。" },
    { englishName: "UlCompSwitch", chineseName: "上行CoMP功能开关", meanning: "上行CoMP功能开关，取值范围: ENUMERATED{ON，OFF, NA}" },
    { englishName: "DlCompSwitch", chineseName: "下行CoMP功能开关", meanning: "下行CoMP功能开关，取值范围: ENUMERATED{ON，OFF, NA}" },
    { englishName: "UlMuMimoSwitch", chineseName: "上行MU-MIMO功能开关", meanning: "上行MU-MIMO功能开关，取值范围: ENUMERATED{ON，OFF, NA}" },
    { englishName: "DlMuMimoSwitch", chineseName: "下行MU-MIMO功能开关", meanning: "下行MU-MIMO功能开关取值范围: ENUMERATED{ON，OFF, NA}" },
    { englishName: "UlIcicSwitch", chineseName: "上行ICIC功能开关", meanning: "上行ICIC功能开关，取值范围: ENUMERATED{ON，OFF, NA}" },
    { englishName: "DlIcicSwitch", chineseName: "下行ICIC功能开关", meanning: "下行ICIC功能开关，取值范围: ENUMERATED{ON，OFF, NA}" },
    { englishName: "UlFssSwitch", chineseName: "上行频选调度开关", meanning: "上行频选调度开关，取值范围: ENUMERATED{ON，OFF, NA}" },
    { englishName: "DlFssSwitch", chineseName: "下行频选调度开关", meanning: "下行频选调度开关，取值范围: ENUMERATED{ON，OFF, NA}" },

    { englishName: "AdjacentCellId", chineseName: "相邻小区的标识", meanning: "指向与该小区相邻的UTRAN小区或其他系统管理的UTRAN小区的唯一标识。 (小区唯一标识表示方式为：MCC-MNC-RNCID-CID, 以上均为十进制整数，参见3GPP TS 25.401" },
    { englishName: "Lac", chineseName: "位置区编码", meanning: "该小区所在的位置区[1.. 65533, 65535]（LAC见3GPP TS 23.003）" },
    { englishName: "Rac", chineseName: "路由区编码", meanning: "其他UTRAN小区或其他系统管理的UTRAN小区的路由区[0..255]（RAC，见3GPP TS 23.003）" },
    { englishName: "Uarfcn", chineseName:"频点", meanning: "其他UTRAN TDD小区或其他系统管理的UTRAN TDD小区的UTRA绝对无线频率[0..16383]（UARFCN，见3GPP TS 25.433，仅用于TDD）" },
    { englishName: "CellParameterId", chineseName: "小区参数标识", meanning: "用于指示扰码和中间码（0～127,见3GPP?TS?25.433，仅用于TDD）" },
    {
      englishName: "CellReservedForOperatorUse", chineseName: "小区预留给运营商使用指示", meanning: "规范参数名称：cellReservedForOperatorUseCell status and cell reservations are indicated in the SystemInformationBlockType1 by means of two Information Elements, cellBarred and cellReservedForOperatorUse.取值范围说明：ENUMERATED {reserved, notReserved }"
    },
    { englishName: "CellBarred", chineseName: "小区禁止接入指示", meanning: "规范参数名称：cellBarredCell status and cell reservations are indicated in the SystemInformationBlockType1 by means of two Information Elements, cellBarred and cellReservedForOperatorUse.取值范围说明：ENUMERATED {barred, notBarred }" },
    { englishName: "AdditionalSpectrumEmission", chineseName: "附加频谱散射", meanning: "规范参数名称：additionalSpectrumEmissionThe UE requirements related to IE AdditionalSpectrumEmission are defined in TS 36.101 [table 6.2.4-1].取值范围说明：INTEGER [1..32]" },
    { englishName: "TimeAlignmentTimerCommon", chineseName: "上行时间对齐定时器", meanning: "规范参数名称：timeAlignmentTimerCommonTimeAlignmentTimer is used to control how long the UE is considered uplink time aligned. Corresponds to the Timer for time alignment in TS 36.321. Value in number of sub-frames. Value sf500 corresponds to 500 sub-frames, sf750 corresponds to 750 sub-frames and so on.取值范围说明：ENUMERATED { sf500, sf750, sf1280, sf1920, sf2560, sf5120, sf10240, infinity }" },
    { englishName: "AntennaPortsCount", chineseName: "小区支持的发射天线端口数目", meanning: "规范参数名称：antennaPortsCountParameter represents the number of cell specific antenna ports where an1 corresponds to 1, an2 to 2 antenna ports etc. see TS 36.211, 6.2.1.取值范围说明：ENUMERATED {an1, an2, an4, spare1 }" },
    { englishName: "MaxHarqTx", chineseName: "上行HARQ最大传输数量", meanning: "规范参数名称：maxHARQ-TxMaximum number of transmissions for UL HARQ in TS 36.321.取值范围说明：ENUMERATED {n1, n2, n3, n4, n5, n6, n7, n8, n10, n12, n16, n20, n24, n28, spare2, spare1 }" },
    { englishName: "PeriodicBsrTimer", chineseName: "周期性BSR上报定时器", meanning: "规范参数名称：periodicBSR-TimerTimer for BSR reporting in TS 36.321. Value in number of sub-frames. Value sf10 corresponds to 10 sub-frames, sf20 corresponds to 20 sub-frames and so on.取值范围说明：ENUMERATED {sf5, sf10, sf16, sf20, sf32, sf40, sf64, sf80, sf128, sf160, sf320, sf640, sf1280, sf2560, infinity, spare1 }" },
    { englishName: "RetxBsrTimer", chineseName: "BSR重传定时器", meanning: "规范参数名称：retxBSR-TimerTimer for BSR reporting in TS 36.321. Value in number of sub-frames. Value sf640 corresponds to 640 sub-frames, sf1280 corresponds to 1280 sub-frames and so on.取值范围说明：ENUMERATED {sf320, sf640, sf1280, sf2560, sf5120, sf10240, spare2, spare1 }" },
    { englishName: "ModificationPeriodCoeff", chineseName: "修改周期系数", meanning: "规范参数名称：modificationPeriodCoeffActual modification period, expressed in number of radio frames= modificationPeriodCoeff * defaultPagingCycle. n2 corresponds to value 2, n4 corresponds to value 4, n8 corresponds to value 8 and n16 corresponds to value 16.取值范围说明：ENUMERATED {n2, n4, n8, n16 }" },
    { englishName: "UlCyclicPrefixLength", chineseName: "上行循环前缀长度", meanning: "规范参数名称：UL-CyclicPrefixLengthParameter: Uplink cyclic prefix length see 36.211 [5.2.1] where len1 corresponds to normal cyclic prefix and len2 corresponds to extended cyclic prefix.取值范围说明：ENUMERATED {len1, len2 }" },
    { englishName: "DefaultPagingCycle", chineseName: "默认寻呼周期", meanning: "规范参数名称：defaultPagingCycleDefault paging cycle, used to derive ‘T’ in TS 36.304 . Value rf32 corresponds to 32 radio frames, rf64 corresponds to 64 radio frames and so on.取值范围说明：ENUMERATED {rf32, rf64, rf128, rf256 }" },
    { englishName: "NB", chineseName: "寻呼分组个数", meanning: "规范参数名称：nBParameter: nB is used as one of parameters to derive the Paging Frame and Paging Occasion according to TS 36.304 . Value in multiples of defaultPagingCycle ('T'). A value of fourT corresponds to 4 * defaultPagingCycle, a value of twoT corresponds to 2 * defaultPagingCycle and so on.取值范围说明：ENUMERATED {fourT, twoT, oneT, halfT, quarterT, oneEighthT, oneSixteenthT, oneThirtySecondT }" },
    ],
    
    //remoteIpPort:getApp().globalData.remoteIp
  }, 
  search:function(key){
    var that = this;
    if(key==""){
      that.setData({showHotSearch:true});
      //that.setData({hitData:allGuiFanArr});
      that.setData({ hitData: [] });
      return ;
    }
    that.setData({showHotSearch:false});
    var keyArr=key.trim().split(" ");
    var arr = [];
    for(let i=0;i<that.data.allGuiFanArr.length;++i){
      for(let j=0;j<keyArr.length;++j){
        if (that.data.allGuiFanArr[i].chineseName.indexOf(keyArr[j]) >= 0) {
          arr.push(that.data.allGuiFanArr[i]);
          //console.log(that.data.allGuiFanArr[i]);
        }
      }
      
    }
    if(arr.length==0){
      that.setData({hitData:[{show:true,chineseName:"未找到相关规范"}]});
    }else{
      that.setData({hitData:arr});
    }
    console.log("name:"+that.data.hitData[0].chineseName+", showHot:"+that.data.showHotSearch);
  },
  getSearchInput: function (e) {
    var tmpVal = e.detail.value;
    this.setData({searchValue: tmpVal });
    if (!tmpVal || tmpVal.length == 0) {
      this.setData({content_show: false,});
      this.setData({ resJsonData:[]});
    }
    //console.log(this.data.searchValue);
  },
  itemClick: function (e) {
    //console.log("select:");
    var dataArr = this.data.allGuiFanArr;
    var selectedKey = e.currentTarget.dataset.gag;
    //console.log("select:"+selectedKey);
    for(var i=0;i<dataArr.length;++i){
      var tmpJson = dataArr[i];
      var tmpKey = tmpJson["chineseName"];
      console.log("tmpKey:"+tmpKey);
      
      if(tmpKey==selectedKey){
        var tmpStr = JSON.stringify(tmpJson); 
        //console.log(tmpStr);
        wx.navigateTo({ url: "../displayData/displayData?node=" + tmpStr });
        //console.log(tmpStr);
        break;
      }
    }
    
  },
  searchItem: function (e) {
    
    var that = this;
    var dataArr=that.data.dataForSearch;
    var searchStr = that.data.searchValue;
    if (!searchStr || searchStr.length == 0) {
      this.setData({ content_show: false, });
      this.setData({ resJsonData: [] });
      return;
    }
    var arr = [];
    for (var i = 0; i < dataArr.length;i++){
      var tmpRes = dataArr[i].cellname.indexOf(searchStr);
      //console.log("input:"+that.searchValue+"data:"+dataArr[i].cellname+",tmp:"+tmpRes);
      if(tmpRes!=-1){
        arr.push(dataArr[i]);
      }
    }
    //var str=JSON.stringify(arr);
    //console.log("len:"+arr.length);
    if(arr.length>0){
      that.setData({resJsonData:arr});
      that.setData({content_show:true});
    }else{
      that.setData({resJsonData:[]});
      that.setData({content_show:false})
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
  wxSerchFocus:function(){
    this.setData({ testVal:"focus"});
  },
  wxSearchInput: function (e) {
    this.search(e.detail.value);
    this.setData({ testVal: "input" });
  },

  wxSearchBlur: function () {
    var that = this;
    console.log("aaa");
    that.setData({ showHotSearch: true });
    that.setData({ hitData: [] });
    this.setData({ testVal: "blur" });
  },
})