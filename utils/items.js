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
        question: ['question 1'],
        options: ['选项A','选项B','选项C','选项D'],
        anstwers: ['a','b','c']
       }, {
         question: ['question 2'],
         options: ['选项A', '选项B', '选项C', '选项D'],
         anstwers: ['b', 'c']
       }, {
        question: ['question 3'],
        options: ['选项A', '选项B', '选项C', '选项D'],
        anstwers: ['c']
      },
     ]
  }
 
  return arr
} 