(function(){
  omsApp.filter("activeFilter",function(){
    return function(active){
      return active ? "active":"";
    }
  });
  
  omsApp.filter("sendFilter",function(){
    return function(send){
      return send==0 ? "发送":"已发送";
    }
  });
})();
