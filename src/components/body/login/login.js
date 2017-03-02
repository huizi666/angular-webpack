$(document).ready(function(){
	var baseUrl = '';
	$.ajaxSetup({
		cache: false //关闭AJAX相应的缓存
	});
	
	//获取cookie值
	var rname = $.cookie('rname')
	var rpwd = $.cookie('rpwd')
	if(rname != null && rname != '' && rpwd != null && rpwd != ''){
		$('#markPass').attr('checked',true)
		//将获取的值填入
		$('#username').val('rname')
		$('#password').val('rpwd')
	}else{
		
		console.log($('#username').val())
	}
	
	//获取公钥
	//publickeyUrl
	var publickeyUrl = baseUrl + "/publickey"
	$.ajax({
		type: "get",
		url: publickeyUrl,
		async: true,
		dataType: "json",
		contentType: "application/json;charset=utf-8",
		success: function(data) {
			publickey = data
			console.log(publickey)
		}
	});
	//loginURl
	var loginURl = baseUrl + "/login";
	//登陆
	$(document).keydown(function(event) {
		if (event.keyCode == 13) {
			$("#submitButton").click(Login());
		}
	});
	$('#submitButton').on('click', Login);
	
	function Login() {
		//window.location.href = 'http://127.0.0.1:5050/src/index.html'
		console.log($('#loginForm').serialize());
		console.log("点击了登录!!!!!!");
		if (checkForm()) {
			console.log("点击了登录~~~~~~~~~~~~~~~~~!!!!!");
	
			$.ajax({
				type: "post",
				url: loginURl,
				async: true,
				data: {
					name: userName,
					pwd: secPassWord,
					modulus: publickey.modulus,
					exponent: publickey.exponent
				},
				error: function() {
					alert('登录失败')
					
					window.location.href = 'http://127.0.0.1:5050/src/login.html'
	
				},
				success: function(data) {
					console.log(data)
					var loginInfo = data;
					userName = loginInfo.user.username;
					token = loginInfo.token;
					
					//记住密码/  存储一个带7天期限的cookie
					if($('#markPass').attr('checked') == true){
						alert('checkde!!')
						$.cookie('rmbUser','true',{expires:7,secure:true,path:'/'});
						$.cookie('rname',userName,{expires:7,path:'/'});
						$.cookie('rpwd',secPassWord,{expires:7,path:'/'});
					}else{
						$.cookie('rmbUser','false',{expires:-1});
						$.cookie('rname','',{expires:-1});
						$.cookie('rpwd','',{expires:-1});
					}
				window.location.href = 'http://127.0.0.1:5050/src/index.html'
				}
			});
		}
		return false;	
	}
	//校验
	function checkForm() {
		//获取用户名/密码/验证码
		var userName = $.trim($('#username').val()),
			passWord = $.trim($('#password').val()),
			checkCode = $.trim($("#checkcode").val());
		//校验用户名是否为空
		if (userName == "" || userName == $.trim($("#username").attr("placeholder"))) {
			$(".nameError").css('visibility', 'visible');
			$("#username").val('').focus();
			return false;
		}
		//校验密码是否为空
		if (passWord == "") {
			$(".pwdError").css('visibility', 'visible');
			$("#password").focus();
			return false;
		}
		//校验验证码是否为空
		if ($("#checkcode").length >= 1) {
			if (checkCode == "" || checkCode == $.trim($("#checkcode").attr("placeholder"))) {
				$(".checkError").css('visibility', 'visible');
				$("#checkcode").val('').focus();
				return false;
			}
		}
		//全部校验已通过
		if (passWord) {
			//加密后密码
			secPassWord = secPWD(passWord);
		}
		//delCookie("username");
		//delCookie("password");
		return true;
	}
	
	//rsa
	function secPWD(password) {
		var modulus = publickey.modulus;
		var exponent = publickey.exponent;
		var key = RSAUtils.getKeyPair(exponent, '', modulus);
		return RSAUtils.encryptedString(key, password);
		alert(key)
	}
});	
