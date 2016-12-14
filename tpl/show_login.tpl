
    <hr style="margin-bottom: 60px;">
    <div class="myaccount">
        <ul>
            <li ><img src="images/01.png"></li>
            <li>
                <p>欢迎回来 {{user_name}}，您好！</p>
                <p>{{user_account}}</p>
            </li>
            <li><a href="javascript:;" id="exit">退出</a></li>
        </ul> 
    </div>
    <div class="chongdiv">
        <ul>
            <li><p class="cz">账户充值</p><p class="de">支持大额充值</p></li>
            <li><span>{{balance}}元</span></li>
            <li><a href="internet_recharge.html">立即充值</a></li>
        </ul> 
    </div>
	<div class="bank_list">
{{#bankList}}
<!-- 银行卡2-->
  <div class="wrap">
    <div class="bank_msg">
        <div class="bank_img">
          <img src="./images/bank_img/{{bank_code}}.png" >
        </div>
        <div class="bank_detial">
            <span class="bank_code">{{bank_num}}</span>
            <span class="bank_type">储蓄卡</span>
        </div>
    </div>
    <!-- <div class="card_radio"><input type="radio" value="" />使用此卡充值</div> -->
  </div>
{{/bankList}}
<!-- 银行卡2-->
</div>
<div class="message">
  <ul>
     <li><p><span style="color:#333333;">建议您使用</span><span style="color:#0000FF;">IE浏览器</span><span style="color:#333333;">进行充值，请留意您的浏览器对银联和各家银行网银的拦截。</span></p></li>
    <li> <p><span style="color:#333333;">如果您使用银联在线支付充值，请在</span><span style="color:#0000FF;">银联页面</span><span style="color:#333333;">选择网银支付进行大额充值。</span></p></li>
    
  </ul>
</div>
<style type="text/css">
  .message{
    width: 600px;
    margin: 0 auto; 
    margin-bottom: 30px;
  }
  .message ul li{
    list-style-type: disc;
    color:rgb(100,100,100);
    font-size: 16px;
    height: 34px;
  }
</style>
