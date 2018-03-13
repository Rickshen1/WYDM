module.exports = {
    mtData: mtData,
    searchmtdata: searchmtdata
}
var mt_data = mtData()
function searchmtdata(id) {
    var result
    for (let i = 0; i < mt_data.list.length; i++) {
        var mt = mt_data.list[i]
        if (mt.id == id) {
            result = mt
        }
    }
    return result || {}
}

function mtData() {
    var arr = {
        list: [
            {
                cgi: '460-00-123-1',
                cellname: '北京市海淀区海兴大厦1',
                latitude: '39.95933',
                longitude: '116.298',
                pci: '501',
                rsrp: '-90'
          }, {
            cgi: '460-00-123-2',
            cellname: '北京市海淀区海兴大厦2',
            latitude: '38.902',
            longitude: '117，03',
            pci: '500',
            rsrp: '-90'
            }, {
              cgi: '460-00-123-3',
              cellname: '北京市海淀区海兴大厦3',
              latitude: '39.123',
              longitude: '115，111',
              pci: '502',
              rsrp: '-90'
          }, {
            cgi: '460-00-123-4',
            cellname: '北京市海淀区海兴大厦4',
            latitude: '38.999',
            longitude: '116.111',
            pci: '503',
            rsrp: '-90'
          }, 
        ]
    }
    return arr
} 