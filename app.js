(function(){
  'use strict';
var myapp=angular.module('myapp',['ui.bootstrap']);
myapp.factory("JunkData",function(){
var data=["Value1","Value2"];
return data;
});

myapp.controller("TypeAheadController",function($scope,JunkData){
$scope.selected1=null;
$scope.selected2=null;
$scope.selected3=null;
$scope.selected4=null;
$scope.selected5=null;
$scope.selected6=null;
$scope.selected7=null;
$scope.datas=JunkData;
});

myapp.controller("CheckboxController",($scope)=>{
$scope.checks=["None","Hypoallergenic","Non-irritating","NMT","Developed for / Designed for / suitable for newborns across the regions","Other"];
});



}());
