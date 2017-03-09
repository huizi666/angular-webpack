//专注于对上提供json数据
var getUser = function(){return'{"pageNum":0,"pageSize":0,"pages":0,"firstPage":0,"lastPage":0,"prePage":0,"nextPage":0,"isFirstPage":true,"isLastPage":true,"hasPreviousPage":true,"hasNextPage":true,"navigatepageNums":[0],"startRow":0,"endRow":"string","total":"string","list":[{"id":0,"companyName":"string","month":"string","send":0,"state":0}]}'}

var getAdmin = function(){
	return '{"role":"admin"}'
}
//将函数对外提供成借口，外部只要require('json.js') 等于得到了我们的整个函数
//module.exports = getUser;module.exports = getUser();
module.exports =[getUser,getAdmin]

/*
{
  "pageNum": 0,
  "pageSize": 0,
  "pages": 0,
  "firstPage": 0,
  "lastPage": 0,
  "prePage": 0,
  "nextPage": 0,
  "isFirstPage": true,
  "isLastPage": true,
  "hasPreviousPage": true,
  "hasNextPage": true,
  "navigatepageNums": [
    0
  ],
  "startRow": 0,
  "endRow": "string",
  "total": "string",
  "list": [
    {
      "id": 0,
      "companyName": "string",
      "month": "string",
      "send": 0,
      "state": 0
    }
  ]
}

*/
