$(function(){
	//ios 和 安卓下载地址添加
	$("#J_IosDownloadUrl").attr("href",IosDownloadUrl);
	$("#J_AndroidDownloadUrl").attr("href",AndroidDownloadUrl);
	
	//第一屏进入动画
	function firstAnimate(){
		//手机
		$(".phoneBox").velocity({translateX:'100px',translateY:'100px',opacity:0},{duration:0}).velocity({translateX:'0px',translateY:'0px',opacity:1},{duration:1000,easing:'ease',delay:500});

		//文字
		$(".txt_name").velocity({translateX:'0px',translateY:'40px',opacity:0},{duration:0}).velocity({translateX:'0px',translateY:'0px',opacity:1},{duration:1000,easing:'ease',delay:0});
		$(".txt_describe").velocity({translateX:'0px',translateY:'40px',opacity:0},{duration:0}).velocity({translateX:'0px',translateY:'0px',opacity:1},{duration:1000,easing:'ease',delay:0});
		
		$(".QR_Code").velocity({translateX:'0px',translateY:'40px',opacity:0},{duration:0}).velocity({translateX:'0px',translateY:'0px',opacity:1},{duration:1000,easing:'ease',delay:0});
		$(".bnt_box").velocity({translateX:'0px',translateY:'40px',opacity:0},{duration:0}).velocity({translateX:'0px',translateY:'0px',opacity:1},{duration:1000,easing:'ease',delay:0});
	}
	//第一屏退出动画
	 function firstAnimateOut(){
		//手机
		$(".phoneBox").velocity("stop").velocity({translateX:'100px',translateY:'100px',opacity:0},{duration:100})

		//文字
		$(".txt_name").velocity("stop").velocity({translateX:'0px',translateY:'20px',opacity:0},{duration:100})
		$(".txt_describe").velocity("stop").velocity({translateX:'0px',translateY:'20px',opacity:0},{duration:100})
		
		$(".QR_Code").velocity("stop").velocity({translateX:'0px',translateY:'20px',opacity:0},{duration:100})
		$(".bnt_box").velocity("stop").velocity({translateX:'0px',translateY:'20px',opacity:0},{duration:100})
	}
	
	
	//第二屏进入动画
	function secondAnimate(){
		//手机
		$("#J_phone2").velocity({translateX:'-200px',translateY:'200px',opacity:0},{duration:0,delay:0}).velocity({translateX:'0px',translateY:'0px',opacity:1},{duration:800,delay:0});
		//文本
		$("#J_twoTxt").velocity({opacity:0},{duration:0}).velocity({opacity:1},{duration:3000,delay:0});
	}
	 //第二屏退出动画
	function secondAnimateOut(){
		//手机
		$("#J_phone2").velocity("stop").velocity({translateX:'-200px',translateY:'200px',opacity:0},{duration:0});
		//文本
		$("#J_twoTxt").velocity("stop").velocity({opacity:0},{duration:0});
	}
	
	//第三屏进入动画
	function thirdAnimate(){
		//手机
		$("#J_phone3").velocity({translateX:'200px',translateY:'-200px',opacity:0},{duration:0,delay:0}).velocity({translateX:'0px',translateY:'0px',opacity:1},{duration:800,delay:0});
		//文本
		$("#J_threeTxt").velocity({opacity:0},{duration:0}).velocity({opacity:1},{duration:3000,delay:0});
	}
	 //第三屏退出动画
	function thirdAnimateOut(){
		//手机
		$("#J_phone3").velocity("stop").velocity({translateX:'-200px',translateY:'200px',opacity:0},{duration:0});
		//文本
		$("#J_threeTxt").velocity("stop").velocity({opacity:0},{duration:0});
	}


	//第四屏进入动画
	function forthAnimate(){
		//手机
		$("#J_phone4").velocity({translateX:'-200px',translateY:'200px',opacity:0},{duration:0,delay:0}).velocity({translateX:'0px',translateY:'0px',opacity:1},{duration:800,delay:0});
		//文本
		$("#J_fourTxt").velocity({opacity:0},{duration:0}).velocity({opacity:1},{duration:3000,delay:0});
	   
	}
	 //第四屏退出动画
	function forthAnimateOut(){
		//手机
		$("#J_phone4").velocity("stop").velocity({translateX:'-200px',translateY:'200px',opacity:0},{duration:0});
		//文本
		$("#J_fourTxt").velocity("stop").velocity({opacity:0},{duration:0});
	   
	}
	
    $('#fullpage').fullpage({
        sectionsColor :  ['#fff', '#fff', '#fff'] ,
        navigation : true,
        css3       : true,
        afterLoad:function(a,index){
            if(index == 1){
                firstAnimate();
            }
            if(index ==2){
                secondAnimate();
            }
            if(index == 3){
                thirdAnimate();
            }
            if(index == 4 && $("#J_fourTxt").css("opacity") == 0){
                forthAnimate();
            }
        },
        onLeave    : function( index, nextIndex, direction ){
            if(index == 1){
                firstAnimateOut();
            }
            if(index== 2){
               secondAnimateOut();
            }
            if(index == 3){
                thirdAnimateOut();
            }
            if(index == 4&&nextIndex==3){
                forthAnimateOut();
            }
        }
    });
})