//验证手机号码 
function checkSubmitMobil(objvalue) { 
	// var objvalue=obj.val().trim();
	var retel=/^[1][3-8][0-9]{9}$/;
	if (objvalue == "") { 
		return false; 
	} 
	if (!retel.test(objvalue)) { 
		return false; 
	} 
	return true; 
} 
//验证密码格式
function checkSubmitPass(objvalue) { 
	// var objvalue=obj.val().trim();
	var pwd_re =  /(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{6,16}$/;
	if (!pwd_re.test(objvalue)) { 
		return false; 
	} 
	return true;
} 
function IsDate(str){      
    if(str.length!=0){    
        var reg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/;     
        var r = str.match(reg);     
        if(r==null)    
            return false;
        else
        	return true;
     }    
     else
     	return false;
} 
//验证日期（判断结束日期是否大于开始日期）日期格式为YY—MM—DD  
function checkSEtime(startTime,endTime){              
    if(startTime.length>0 && endTime.length>0){     
        var startTmp=startTime.split("-");  
        var endTmp=endTime.split("-");  
        var sd=new Date(startTmp[0],startTmp[1],startTmp[2]);  
        var ed=new Date(endTmp[0],endTmp[1],endTmp[2]);  
        if(sd.getTime()>ed.getTime()){   
           return false;     
        }     
    }     
    return true;     
}  