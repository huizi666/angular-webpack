require('./components/base/css/reset.css');

var Bill =  require('./components/body/bill/bill.js');
function App(){
	console.log('dddd')
	var dom = document.getElementById("dom")
	var bill = new Bill()
	dom.innerHTML = bill.tpl
	
}
//调用函数
new App()

