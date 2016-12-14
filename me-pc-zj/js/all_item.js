$(window).load(function(){
	 var picker = new Pikaday(
    {
        field: document.getElementById('start_date'),
        firstDay: 1,
        minDate: new Date('2010-01-01'),
        maxDate: new Date('2020-12-31'),
        yearRange: [2000,2020]
    });
   var picker1 = new Pikaday(
    {
        field: document.getElementById('end_date'),
        firstDay: 1,
        minDate: new Date('2010-01-01'),
        maxDate: new Date('2020-12-31'),
        yearRange: [2000,2020]
    });
    
    $(".my_account_choose").click(function(){
    	if($(".dropdown").hasClass("open")){
    		$(this).css("background","url('images/search_down.png') no-repeat 107px center");
    	}else{
    		$(this).css("background","url('images/search_up.png') no-repeat 107px center");
    	}
    });
    

    
    
    //复选框
     $(".checkbox").click(function() {
     if ($(this).text() === "√")  
       {
        $(this).text("");
        $(this).attr('ischeacked',false)
       } 
     else
     {
       $(this).text("√");
       $(this).attr('ischeacked',true)
     }
        var data_option=($(this).attr('option-type'));
        // locationhref(data_option)
 	  });
});
function locationhref(option_type)
{
      var where="capital_list.html?index=true";
      var page=getQueryString('page');
      var Qstart_date=getQueryString('start_date');
      var Qend_date=getQueryString('end_date');
      var Qoption_type=getQueryString('option_type');

      if(Qoption_type!=null&&Qoption_type!='')
       {
            var oppArr=Qoption_type.split(',')
            var temp='';
            var weizh=$.inArray(option_type, oppArr);
            if(weizh>=0)
                oppArr.splice(weizh,1);
            else
               oppArr.push(option_type)

            $(oppArr).each(function(key,value){
               temp+=value+',';
            });
            temp=temp.substr(0,temp.length-1)
            where+="&option_type="+temp;  
       }
       else
       {
        where+="&option_type="+option_type;  
       }

       if(Qstart_date!=null)
       {
          where+="&start_date="+start_date;
       }
       
       if(Qend_date!=null)
       {
          where+="&end_date="+end_date;
       }
       if(page!=null)
        {
          where+="&page="+page;
        }
        window.location.href=where;
}
function searchetime()
{
    var option_type="";

     $("#cheackboxs i").each(function(i){
      var ischeacked=$(this).attr('ischeacked');
      var thistype=$(this).attr('option-type');
        if(ischeacked=='true')
          option_type+=thistype+',';
      });
     option_type=option_type.substr(0,option_type.length-1);
      var start_date= $('#start_date').val().trim();
      var end_date= $('#end_date').val().trim();

    if(!checkSEtime(start_date,end_date))
       {
         alertmsg('开始时间不能大于结束时间')
        return false
       } 
      var where="capital_list.html?index=true";
      var page=getQueryString('page');
      var Qoption_type=getQueryString('option_type');
      var Qstart_date=getQueryString('start_date');
      var Qend_date=getQueryString('end_date');
      var abc=getQueryString('aaa');
      if(!IsDate(start_date) && start_date!='' &&start_date!=null)
        {
            alertmsg('请输入正确的开始日期')
            return false;
        }    
      if(!IsDate(end_date) && end_date!='' &&end_date!=null)
      {
          alertmsg('请输入正确的结束日期')
          return false;
      }
      if(Qoption_type!='' && Qoption_type!='null')
       {
          Qoption_type=option_type;
       }
       where+="&option_type="+option_type;
          if(start_date!=null)
        where+="&start_date="+start_date;
         if(end_date!=null)
        where+="&end_date="+end_date;
       page=1;
       if(page!=null)
        {
          where+="&page="+page;
        }
        window.location.href=where;
}

