

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

function form_s_be(num,term,year_income){//计算公式金额，期限，利率
    if(year_income=='0.115')
    {
      month_income=0.0096;
    }
    else
    {
      first_income=(year_income/12).toFixed(12);
  month_income=(first_income*term).toFixed(10);
    }
    s_result=(month_income*num).toFixed(2);
    return s_result;
  }  

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
             url: data_json.checkcodereq,
             data:{check_code_key:radom10},
             success: function(data,textStatus,xhr){
                if(data.code=='000')
                {
                 $('.reg_invide_img').attr('src',data_json.checkcoderes+'?check_code_key='+radom10);
                }
             },
             error:function(data){
                // alert('网络超时')
             }
      });

}
function alertmsg(msg,type,locaurl)
{
  var type=typeof(type)
  var locaurltype=typeof(locaurl)
  if($('.modal-backdrop'))
  {
    $('.modal-backdrop').remove();
  }
  if(type=='undefined')
   { type=false}
    $('body').append("<div id='msgdiv'></div>");
    $('#msgdiv').html('');
    var html='<div class="modal fade" id="datamsgModal" tabindex="-1" role="dialog" ';
    html+='aria-labelledby="myModalLabel" aria-hidden="true">';
    html+='<div class="modal-dialog">';
    html+=  '<div class="modal-content">';
    html+=     '<div class="modal-header">';
    html+=        '<button type="button" class="close" ';
    html+=           'data-dismiss="modal" aria-hidden="true">';
    html+=              '&times;';
    html+=      '  </button>';
    html+=       ' <h4 class="modal-title" id="myModalLabel">';
    html+=           '提示';
    html+=        '</h4>';
    html+=    '</div>';
    html+=    '<div class="modal-body" id="datamsg"></div>';
    html+=   ' <div class="modal-footer">';
    html+=       '<button  type="button" class="btn btn-default" ';
    html+=           'data-dismiss="modal">关闭';
    html+=       ' </button>';
    if(type=='boolean')
    {
      html+=       '<button type="button" class="btn btn-danger" data-dismiss="modal" onclick="gourl()">去登录</button>'
    }

    html+=     '</div>';
    html+=  '</div><!-- /.modal-content -->';
    html+='</div><!-- /.modal -->';
    html+='</div>';

    $('#msgdiv').append(html);
     $('#datamsg').html(msg)
    $("#datamsgModal").modal("show");
}


function alertmsgDalog(msg,lefttext,righttext)
{

    var button = ' <div class="modal-footer">';
        button+=       '<button  type="button" class="btn btn-default" ';
        button+=           'data-dismiss="modal" id="leftbutton">'+lefttext;
        button+=       ' </button>';
        button+=       "<button type='button' class='btn btn-danger' data-dismiss='modal' id='rightbutton'>"+righttext
        button+=       '</button>'
        button+=     '</div>';


    if($('.modal-backdrop'))
    {
      $('.modal-backdrop').remove();
    }
    $('body').append("<div id='msgdiv'></div>");
    $('#msgdiv').html('');
    var html='<div class="modal fade" id="datamsgModal" tabindex="-1" role="dialog" ';
    html+='aria-labelledby="myModalLabel" aria-hidden="true">';
    html+='<div class="modal-dialog">';
    html+=  '<div class="modal-content">';
    html+=     '<div class="modal-header">';
    html+=        '<button type="button" class="close" ';
    html+=           'data-dismiss="modal" aria-hidden="true">';
    html+=              '&times;';
    html+=      '  </button>';
    html+=       ' <h4 class="modal-title" id="myModalLabel">';
    html+=           '提示';
    html+=        '</h4>';
    html+=    '</div>';
    html+=    '<div class="modal-body" id="datamsg"></div>';
    html+=button;
    html+=  '</div><!-- /.modal-content -->';
    html+='</div><!-- /.modal -->';
    html+='</div>';

    $('#msgdiv').append(html);
     $('#datamsg').html(msg)
    $("#datamsgModal").modal("show");
}
function gourlDialg(gourl) {
 window.location.href=gourl;
}

function gourl(gourl) {
 window.location.href='login.html';
}

function logout() {
    $.ajax({
      url:data_json.loginOut_pc,
      type:'post',
      async:false,
      data:{version:app_data.version,tokenid:getCookie('tokenid')},
      dataType:'json',
      success:function(data){
        if(data.code=='000')
        {
          clearCookie();
         localStorage.clear();
          alertmsg(data.msg);
          $("#datamsgModal").on('hidden.bs.modal', function () {
                  window.location.href='index.html';
          });
        }else
        {
            alertmsg(data.msg);
        }
      }
    });
  }



  //接口方法
    
 
  

  function updateEmail_pc() {
    $.ajax({
      url:data_json.updateEmail_pc,
      type:'post',
      async:false,
      data:{version:app_data.version,tokenid:getCookie('tokenid')},
      dataType:'json',
      success:function(data){
        if(data.code=='000')
        {
          
        }else
        {
          
        }
      }
    });
  }
  function checkcode_pc(tel,type) {
    $.ajax({
      url:data_json.checkcode_pc,
      type:'post',
      async:false,
      data:{version:app_data.version,logintel:tel,type:type},
      dataType:'json',
      success:function(data){
        if(data.code=='000')
        {
            alertmsg(data.msg);
             var obj = document.getElementById("btn_checkcode");
            time(obj);
            var telnumber = getCookie('forget_tel');
            
            if(telnumber!='null' && telnumber!=null)
            {
              var tel = telnumber.substr("0","2"),num = telnumber.substr("8","10"); 
              telnumber = tel+"****"+num;
            }
      			
      			$(".psd_yz_ul1p").html("已向您<span class='tel_yzm'>"+telnumber+"</span>发送验证码");

        }else
        {
           var obj = document.getElementById("btn_checkcode");
          document.getElementById("btn_checkcode").style.backgroundColor="#ccc";
          obj.setAttribute("disabled", true);
          alertmsg(data.msg)
        }
      }
    });
  }
  function saveorupdateaddress_pc() {
    $.ajax({
      url:data_json.saveorupdateaddress_pc,
      type:'post',
      async:false,
      data:{version:app_data.version,tokenid:getCookie('tokenid')},
      dataType:'json',
      success:function(data){
        if(data.code=='000')
        {
          
        }else
        {
          
        }
      }
    });
  }
  var wait=60;
  function time(o) {

      if (wait == 0) {
        o.removeAttribute("disabled");      
        document.getElementById("btn_checkcode").style.backgroundColor="#fe4358";
        o.value="重新发送";
        wait = 60;
      } else {
        // alert(o)
        document.getElementById("btn_checkcode").style.backgroundColor="#ccc";
        o.setAttribute("disabled", true);
        o.value="" + wait + "s后重新发送";
        wait--;
        setTimeout(function() {
          time(o)
        },
        1000)
      }
  }
  function selectaddress_pc() {
    $.ajax({
      url:data_json.selectaddress_pc,
      type:'post',
      async:false,
      data:{version:app_data.version,tokenid:getCookie('tokenid')},
      dataType:'json',
      success:function(data){
        if(data.code=='000')
        {
          
        }else
        {
          
        }
      }
    });
  }


  function equipment_pc() {
    $.ajax({
      url:data_json.equipment_pc,
      type:'post',
      async:false,
      data:{version:app_data.version,tokenid:getCookie('tokenid')},
      dataType:'json',
      success:function(data){
        if(data.code=='000')
        {
          
        }else
        {
          
        }
      }
    });
  }
  

  function customerquery_pc() {
    $.ajax({
      url:data_json.customerquery_pc,
      type:'post',
      async:false,
      data:{version:app_data.version,tokenid:getCookie('tokenid')},
      dataType:'json',
      success:function(data){
        if(data.code=='000')
        {
          
        }else
        {
          
        }
      }
    });
  }

  
  
  function cpcnautotransfer_pc() {
    $.ajax({
      url:data_json.cpcnautotransfer_pc,
      type:'post',
      async:false,
      data:{version:app_data.version,tokenid:getCookie('tokenid')},
      dataType:'json',
      success:function(data){
        if(data.code=='000')
        {
          post_yb(data.url,{message :data.message,signature:data.signature})
        }else
        {
          alertmsg(data.msg)
        }
      }
    });
  }
  function islogin(data){
    if(data!='' && data!=null && data!='null')
      return true;
    else
      return false;
  }
  function getQueryStrZH(str){  
        var rs = new RegExp("(^|)"+str+"=([^/&]*)(/&|$)","gi").exec(window.document.location.href), tmp;   
        if(tmp=rs){   
            return decodeURI(tmp[2]);   
        }   
        return "";   
}   
function iszhongjin(){
  var backdata={};
  $.ajax({
    url:data_json.safeauth_pc,
    type:'post',
    async:false,
    data:{version:app_data.version,tokenid:getCookie('tokenid')},
    dataType:'json',
    success:function(data){
      if(data.code=='000'){
          if(data.is_realname!='1')
          {
           backdata.is_realname= false;
          }
          else if(data.is_binding!='1')
          {
           // alertmsg('未绑卡') 
           backdata.is_binding= false;
          }
          else if(data.accredit_bid_status!='1')
          {
            // alertmsg('实名') 
          backdata.accredit_bid_status= false;
          }
            // alertmsg('用户等级未达到') 
          backdata.zj_user_level= data.zj_user_level;
          

      }
      
    }
  })
  return backdata;
}
 function judge_decimal(obj){
    var invitate=$(obj).val();
    if (parseFloat(invitate.indexOf(".") + 1) > 0) 
     {
        var arrNum=invitate.split('.');
        var nextdian=arrNum[1];
        if(nextdian.length>=3)
        {
          $(obj).val(invitate.substring(0,invitate.indexOf(".")+3));
          return false;
        }
        $(obj).val(invitate.substring(0,invitate.indexOf(".")+3));
     }
	if (invitate.indexOf(".", invitate.indexOf(".") + 1) > 0) 
     {
        $(obj).val(invitate.substring(0,invitate.indexOf(".")+3));
     }
     var tre=/^([1-9][\d]{0,13}|0)((\.[\d]{1,2})|(\.{1}))?$/;
     if(!tre.test(invitate))
     {
      $(obj).val('');
      return false;
     }
     
    var top10_inv=invitate.substring(0,9);
    // if(!invitate.substring(0,invitate.indexOf(".")) || invitate.length>9 || invitate>0){
    //  invitate=invitate.substring(0,9);
    //  $('#input_invitation').val(invitate);
    // }
    
    var inv_len=$(obj).val().length;

    var isdecimai=invitate.indexOf(".");
    if(inv_len<=7)
    {
        if(parseFloat(invitate)<=0)
        {
            $(obj).val('');
            return false;
        }
        if(isdecimai>=0)
        {
            $(obj).val(invitate.substring(0,invitate.indexOf(".")+3));
        }
       
    }else if(inv_len>7 && inv_len<=12){
    	var isdecima2=invitate.indexOf(".");
        if(isdecima2<0)
        {
            $(obj).val(invitate.substring(0,10));
        }
        else if(isdecima2==8 || isdecima2==9)
        {
            $(obj).val(invitate.substring(0,invitate.indexOf(".")+3));
        }
    }
    else
    {
        
        var isdecima2=invitate.indexOf(".");
        if(isdecima2<0)
        {
            $(obj).val(invitate.substring(0,10));
        }
        else if(isdecima2==10)
        {
            $(obj).val(invitate.substring(0,invitate.indexOf(".")+3));
        }
        else
        {
            $(obj).val(invitate.substring(0,10));
        }
    }
}
window.console = window.console || (function(){ 
var c = {}; c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile = c.clear = c.exception = c.trace = c.assert = function(){}; 
return c; 
})(); 