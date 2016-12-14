$(function(){
	
	$(".my_account_mainleft li").click(function(){
		$(this).addClass("my_account_mainleft_red");
		if($(this).text() == "个人设置首页" || $(this).text() == "银行卡管理"){
			$(".my_account_pset").css("color","#fb2d5b");
		}
	});
});

function seeMore(){
	
	$.ajax({
		data:{},
		type:"POST",
		dateType:"json",
		url:'json1.json',
		success:sucfun,
		error:errfun
	});
	function sucfun(msg){
		$(".my_account_tosee").hide();
		for(var i =0;i < 4;i++){
			var otr = $("<tr style='border-bottom:1px dashed #c9c9c9'></tr>");
			var otd = $("<td height='81' align='center'>"+msg.data[0].xiangmu+"</td><td align='center'>"+msg.data[0].point+"</td><td align='center'>"+msg.data[0].money+"</td><td align='center'>"+msg.data[0].remainday+"</td><td align='center'>"+msg.data[0].shouyi+"</td><td  colspan='2'>预定时间："
			+msg.data[0].time1+"<br/>完成时间："+msg.data[0].time2+"</td>");
			otr.append(otd);
			otd.css("font-size","12px");
			$(".tbody").append(otr);
		}
	}
	function errfun(){
		
	}
}
