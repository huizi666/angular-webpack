require('./bill.scss');
require('./zhangdan.css')
var tpl = require('./bill.html');
function bill(){
	return {
		name:'zhang',
		tpl:tpl
	}
}
exports.default = bill;

