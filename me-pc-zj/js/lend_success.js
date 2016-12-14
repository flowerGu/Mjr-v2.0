"use strict";

var app     = angular.module('Mejinrong', []);
var tradeid = getQueryString('tradeid');
var tokenid = getCookie('tokenid');


app.controller('orderdetail', ['$timeout', '$scope', function ($timeout, $scope) {
  $scope.data ={};

  $.post(data_json.zjquerypayresult_pc,{
    version: app_data.version,
    tradeid: tradeid,
    tokenid: tokenid
  }).then(function (data) {

    $scope.data=data;
    
    if(data.payresult == 1){
      $('#J_chenggong').show();
    }else if(data.payresult == 3){
      $('#J_chujiezhong').show();
    }else{
      $('#J_xieyi').hide();
      $('#J_shibai').show();
    }


    $.post(data_json.getdetail_pc, {
      version: app_data.version,
      tokenid: tokenid
    }).then(function (datadetail) {

      $timeout(function () {
        $scope.data.phone_number=datadetail.phone_number;
      });

    }, function (err) {
      alertmsg('加载失败');
    });
    
  },function (err) {
    alertmsg('加载失败');
  });
}]);