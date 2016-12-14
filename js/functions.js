

function tuichu(){
    location.reload();
   clearCookie();
   localStorage.clear();
    $("#backg").css("display","none");
    $(".tip_window").css("display","none");
}

	function getQueryString(name) { 
			var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
			var r = window.location.search.substr(1).match(reg); 
			if (r != null) return unescape(r[2]); return null; 
}

 <!--cookie-->
 
        function setCookie(name, value, expires, path, domain, secure) {
        	var caution = false;
			var now = new Date()
			fixDate(now)
			now.setTime(now.getTime() + 1000 * 60 * 60 * 2) 
			var expires=now;
            var curCookie = name + "=" + escape(value) +
            ((expires) ? "; expires=" + expires.toGMTString() : "") +
            ((path) ? "; path=" + path : "") +
            ((domain) ? "; domain=" + domain : "") +
            ((secure) ? "; secure" : "")
            if (!caution || (name + "=" + escape(value)).length <= 4000)
                document.cookie = curCookie
            else if (confirm("Cookie exceeds 4KB and will be cut!"))
                document.cookie = curCookie
        }
        function getCookie(name) {
            var prefix = name + "="
            var cookieStartIndex = document.cookie.indexOf(prefix)
            if (cookieStartIndex == -1)
                return null
            var cookieEndIndex = document.cookie.indexOf(";", cookieStartIndex + prefix.length)
            if (cookieEndIndex == -1)
                cookieEndIndex = document.cookie.length
            return unescape(document.cookie.substring(cookieStartIndex + prefix.length,
            cookieEndIndex))
        }
        function deleteCookie(name, path, domain) {
            if (getCookie(name)) {
                document.cookie = name + "=" +
                ((path) ? "; path=" + path : "") +
                ((domain) ? "; domain=" + domain : "") +
                "; expires=Thu, 01-Jan-70 00:00:01 GMT"
            }
        }
        function fixDate(date) {
            var base = new Date(0)
            var skew = base.getTime()
            if (skew > 0)
            date.setTime(date.getTime() - skew)
        }

        function clearCookie(){ 
            var keys=document.cookie.match(/[^ =;]+(?=\=)/g); 
            if (keys) { 
            for (var i = keys.length; i--;) 
            document.cookie=keys[i]+'=0;expires=' + new Date( 0).toUTCString() 
            } 
        } 
 <!--cookie-->


 function post_yb(URL, PARAMS) {        
    var temp = document.createElement("form");        
    temp.action = URL;        
    temp.method = "post";        
    temp.style.display = "none";        
    for (var x in PARAMS) {        
        var opt = document.createElement("textarea");        
        opt.name = x;        
        opt.value = PARAMS[x];        
        // alert(opt.name)        
        temp.appendChild(opt);        
    }        
    document.body.appendChild(temp);        
    temp.submit();        
    return temp;        
}   
function test_tokenid(){
    var tokenid=getCookie("tokenid");
     if(tokenid==null){
       tip_windows('您还未登录！','登录','取消','index_no_login.html');
       return false;
     }
     return true;
}

//授权


function pad(num, n) {  
  return Array(n>num?(n-(''+num).length+1):0).join(0)+num;  
} 

function strlen(str){
    var len = 0;
    for (var i=0; i<str.length; i++) { 
     var c = str.charCodeAt(i); 
    //单字节加1 
     if ((c >= 0x0001 && c <= 0x007e) || (0xff60<=c && c<=0xff9f)) { 
       len++; 
     } 
     else { 
      len+=2; 
     } 
    } 
    return len;
}
function stripscript(s) 
{ 
var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]") 
var rs = ""; 
for (var i = 0; i < s.length; i++) { 
rs = rs+s.substr(i, 1).replace(pattern, ''); 
} 
return rs; 
} 

function gozj() //调取中金接口
{
    var amount=$('#u30_input').val();
    var user_detail = $.parseJSON(localStorage.getItem("user_data"));
    var res=/^\d+(\.\d{2})?$/;
    if(amount.trim()=='')
    {
      alert('金额不能为空！')
      return false;
    }
    if(isNaN(amount))
    {
      alert('请输入正确的金额！')
      $('#u30_input').val('')
      return false;
    }
     if(!res.test(amount))
    {
      alert('请输入正确的金额！小数点后两位')
      $('#u30_input').val('')
      return false;
    }
    if(user_detail.is_realname!='1')
    {
      alert('你还未实名认证！')
      return false;
    }
    if(user_detail.is_binding!='1')
    {
      alert('你还未绑定银行卡！')
      return false;
    }
    if(user_detail.accredit_bid_status!='1')
    {
      alert('你还开通自动授权！')
      return false;
    }
    if(parseInt(amount) < parseInt(user_detail.recharge_low))
    {
      alert('最低充值限额为'+user_detail.recharge_low+'元')
      return false;
    }
    if(parseInt(amount) > parseInt(user_detail.recharge_high))
    {
      alert('最高充值限额为'+user_detail.recharge_high+'元')
      return false;
    }
    
    var tokenid = getCookie('tokenid');
    var login_url=myhost+'show_login.html';
    $.ajax({
           type: "POST",
           url: PCCPCNRECHARGE_JSON_URL    ,
           data:{amount:amount,tokenid:tokenid,back_url:login_url},
           success: function(data,status,xhr){
            if(data.code=='000')
            {
               // return false;
              post_yb(data.url,{message :data.message,signature:data.signature})
             
              //  window.location.href=data.url;
            }
             else
             {
              alert(data.msg)
            }
           },
           error:function(data){
           alert('请联系管理员')
           }
    });
}

function submit()//登陆验证
{
  var user_account=$('#u64_input').val();
  var user_password=$('#u47_input').val();
  var check_code_value=$('#u38_input').val();
  var check_code_key='1321456';
  if(user_account.trim()=='')
  {
    alert('手机号不能为空')
    return false;
  }
  var re = /^[1][3-8][0-9]{9}$/;
   if(!re.test(user_account.trim())){
        alert('手机号格式不正确')
        return false;
    }
  if(user_password.trim()=='')
  {
    alert('密码不能为空')
    return false;
  }
  var random10=getCookie('radom10');
   $.ajax({
       type: "post",
       url: PCLOGINCHECK_JSON_URL    ,
       data:{check_code_key:random10,user_account:user_account,user_password:hex_md5(user_password),check_code_value:check_code_value},
       success: function(data){
          if(data.code=='000'){
            alert('登录成功！')
            setCookie("tokenid", data.tokenid);
            setCookie("balance", data.balance);
            setCookie("user_account", data.user_account);
            if(data.is_realname=='1')
            setCookie("user_name", data.user_name);
            else
              setCookie("user_name", '');
            deleteCookie("radom10");
            localStorage.setItem("user_data", JSON.stringify(data)); 
            window.location.href='show_login.html';
          }
          else{
            alert('登录失败！'+data.msg)
             getimg()
             $('#u38_input').val('')
          }
       },
       error:function(data){
         alert('登录失败！')
         getimg()
         $('#u38_input').val('')
       }
});
}

function shuaxin(){
    // location.reload();
   clearCookie();
   localStorage.clear();
   window.location.href='first_login.html'
}
function MathRand() 
{ 
  var Num=""; 
  for(var i=0;i<10;i++) 
  { 
  Num+=Math.floor(Math.random()*10); 
  } 
  return Num;
} 
function getimg()
{
    var radom10=MathRand();
    setCookie("radom10", radom10);
    $.ajax({
             type: "post",
             url: PCCHECKCODE_JSON_URL,
             data:{check_code_key:radom10},
             success: function(data,textStatus,xhr){
                if(data.code=='000')
                {
                 $('#u43_img').attr('src',CHECKCODERES_JSON_URL+'?check_code_key='+radom10);
                }
             },
             error:function(data){
                // alert('网络超时')
             }
      });

}