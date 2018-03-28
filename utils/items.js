module.exports = {
  allItems: allItems,
  searchitem: searchitem
}
var allItems = allItems()
function searchitem(id) {
  var result
  for (let i = 0; i < allItems.list.length; i++) {
    var mt = allItems.list[i]
    if (mt.id == id) {
      result = mt
    }
  }
  return result || {}
}

function allItems() {
  var arr = {
     list1:[
      {
         question: ['在LTE系统R8中，定义的UE最大发射功率为'],
         options: ['10dBm', '21dBm', '23dBm','30dBm'],
        answers: ['A']
       }, {
         question: ['PRACH参数规划中，哪些是需要规划的'],
         options: ['PRACH信道对应起始RB序号', '逻辑根序列起始序号、ZCZC', '非竞争接入前导的数量', 'PRACH Configuration Index'],
         answers: ['A','B', 'C','D']
       }, {
         question: ['当UE打算在LTE小区之间执行重选操作时，计算LTE小区的R值所用的公式哪些是正确的？'],
         options: ['服务小区的R值计算公式：R = RSRP + q-Hyst', '服务小区的R值计算公式：R = RSRP - q-Hyst', '同频相邻小区的R值计算公式：R = RSRP + q-OffsetCell', '同频相邻小区的R值计算公式：R = RSRP - q-OffsetCell'],
        answers: ['A','D']
      },
     ]
  }
 
  return arr
} 