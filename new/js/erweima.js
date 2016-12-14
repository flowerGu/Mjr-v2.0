$(".body_rightdl1").hover(function(){
		$(".erweima").show();
//		if($("title").html() == "产品详情"){
////		$(".erweima dl").css("height","80px");
//	}
},function(){
	$(".erweima").hide();
});

$(".jiantou").click(function(){
	$('body,html').animate({scrollTop:0},300);  
    return false;
});
var hide = true;
$(".up_hide").click(function(){
	if(hide){
		$(this).css("background-image","url(images/hidden.png)");
		$(".erweima_hide").css("width","100px");
		$(".body_right").show();
		hide = false;
	}else{
		$(this).css("background-image","url(images/show.png)");
		$(".erweima_hide").css("width","40px");
		$(".body_right").hide();
		hide = true;
	}
})
