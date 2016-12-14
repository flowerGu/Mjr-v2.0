var app = angular.module('Mejinrong', []);
var tradeid=getQueryString('tradeid')
 $.ajax({
	url:data_json.zjquerypayresult_pc,
	type:'post',
	async:false,
	data:{version:app_data.version,tradeid:tradeid,tokenid:getCookie('tokenid')},
	dataType:'json',
	success:function(data){
		app.controller('orderdetail', function($rootScope) {
			$.ajax({
				url:data_json.getdetail_pc,
				type:'post',
				dataType:'json',
				data:{version:app_data.version,tokenid:getCookie('tokenid')},
				success:function(datadetail) {
					// body...
					$('#myaccout').html(datadetail.phone_number)
					$('.J_contionBuy').bind('click',function () {
						window.location.href='productdetail.html?protuctid='+data.productId+'&status='+data.salesStatus+'&id='+data.projectDetailId;
					})
					$('.JorderDetial').bind('click',function () {
						// body...
						window.location.href='invests.html';
					})
				}
			})
			$rootScope.data=data;
		});
	}
});
