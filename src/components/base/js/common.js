window.onload=function(){

//分页
/* $('.pageTest').page({
      leng: 20,//分页总数
      activeClass: 'activP' , //active 类样式定义
    })*/

//时间选择器
!function(){

	laydate.skin('danlan');//切换皮肤，请查看skins下面皮肤库

	laydate({elem: '#demo'});//绑定元素

}();
//日期范围限制
var start = {

    elem: '#start',

    format: 'YYYY-MM-DD',

    min: laydate.now(), //设定最小日期为当前日期

    max: '2099-06-16', //最大日期

    istime: true,

    istoday: false,

    choose: function(datas){

         end.min = datas; //开始日选好后，重置结束日的最小日期

         end.start = datas //将结束日的初始值设定为开始日

    }

};
}
/*---------------------------------------------------------*/



