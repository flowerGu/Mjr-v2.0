


 var host='http://www.mejinrong.com/me-pc/';//生产地址
 var myhost='http://www.mejinrong.com/';//



//接口URL
var data_json={};
data_json.login_pc                    =host+'login_pc.json';              //登录
data_json.loginOut_pc                    =host+'loginOut_pc.json';              //退出version/tokenid
data_json.checkusername_pc                    =host+'checkusername_pc.json';              //注册用户名重拍version、logintel
data_json.register_pc                    =host+'register_pc.json';              //注册/*version、logintel、password、checkcode、channel、referral_code*/
data_json.checkcode_pc			  =host+'checkcode_pc.json';				//短信验证version、logintel、type
data_json.products_pc			  =host+'products_pc.json';				//产品列表version、tokenid、current
data_json.productdetail_pc			  =host+'productdetail_pc.json';	 //首页产品详情version、id
data_json.billDetail_pc			  =host+'billDetail_pc.json';	 //债券列表
data_json.getdetail_pc			  =host+'getdetail_pc.json';	 //我的财富首页信息
data_json.safeauth_pc			  =host+'safeauth_pc.json';	 //安全认证
data_json.invests_pc			  =host+'invests_pc.json';	 //已出借项目
data_json.assetsdetail_pc			  =host+'assetsdetail_pc.json';	 //资产明细
data_json.capitalrecords_pc			  =host+'capitalrecords_pc.json';	 //资金记录
data_json.saveEmail_pc			  =host+'saveEmail_pc.json';	 //设置邮箱地址
data_json.getProvinceCity			  =host+'getProvinceCity_pc.json';	 //省市三联动
data_json.saveorupdateaddress_pc			  =host+'saveorupdateaddress_pc.json';	 //保存收件地址
data_json.selectaddress_pc			  =host+'selectaddress_pc.json';	 //查询收件地址
data_json.modifypassword_pc			  =host+'modifypassword_pc.json';	 //登陆密码修改
data_json.forgetpasswordlogintel_pc			  =host+'forgetpasswordlogintel_pc.json';	 //忘记密码提交手机号
data_json.fp_VerificationIdCard_pc			  =host+'fp_VerificationIdCard_pc.json';	 //忘记密码验证身份证号
data_json.fp_VerificationCheckCode_pc			  =host+'fp_VerificationCheckCode_pc.json';	 //忘记密码验证验证码
data_json.forgetpassword_pc			  =host+'forgetpassword_pc.json';	 //忘记密码修改密码
data_json.equipment_pc			  =host+'equipment_pc.json';	 //登陆购买设备信息
data_json.messages_pc			  =host+'messages_pc.json';	 //消息中心（分页）
data_json.messagesoprate_pc			  =host+'messagesoprate_pc.json';	 //消息中心（已读未读删除）
data_json.customerquery_pc			  =host+'customerquery_pc.json';	 //消息中心（有无未读）
data_json.cpcnregister_pc			  =host+'cpcnregister_pc.json';	 //中金注册
data_json.cpcnbindbank_pc			  =host+'cpcnbindbank_pc.json';	 //中金绑卡
data_json.cpcnautotransfer_pc			  =host+'cpcnautotransfer_pc.json';	 //自动签约
data_json.cpcnwithdraw_pc			  =host+'cpcnwithdraw_pc.json';	 //提现
data_json.checkcodereq			  =host+'checkcodereq';	 //验证码
data_json.checkcoderes			  =host+'checkcoderes';	 //验证码
data_json.cpcnrecharge_pc			  =host+'cpcnrecharge_pc';	 //充值
data_json.getamtlimit_pc             =host+'getamtlimit_pc';
data_json.topay             =host+'topay_pc';
data_json.loginOut             =host+'loginOut_pc';
data_json.classificationlist             =host+'classificationlist_pc';//常见问题

data_json.banner_pc                   =host+'banner_pc.json';//banner图
data_json.turnoverdetail_pc                   =host+'turnoverdetail_pc';//首页获益
data_json.productintroduce_pc                   =host+'productintroduce_pc';//产品详情
data_json.classificationlist_pc                   =host+'classificationlist_pc';//常见问题列表
data_json.classificationdetail_pc                   =host+'classificationdetail_pc';//常见问题列表
data_json.checkusername_pc					=host+'checkusername_pc.json'//判断已注册
data_json.zjquickpay_pc					=host+'zjquickpay_pc.json'//中金快捷支付
data_json.zjquerypayresult_pc				=host+'zjquerypayresult_pc.json'//中金快捷支付



var app_data={};
app_data.version='1.0';
app_data.type='h5';
