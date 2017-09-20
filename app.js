(function(){
  'use strict';
  var myapp=angular.module('myapp',['ui.bootstrap','checklist-model']);
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
    $scope.selected8=null;
    $scope.datas=JunkData;


    $scope.checks=[
      {id:1,text:"None"},
      {id:2,text:"Hypoallergenic" },
      {id:3,text:"Non-irritating"},
      {id:4,text:"NMT"},
      {id:5,text:"Developed for / Designed for / suitable for newborns across the regions"},
      {id:6,text:"Other"}];

      $scope.isTrue=false;

      $scope.addInput=function(check){

        if(check.text=="Other"){
          $scope.isTrue=!$scope.isTrue;
        }
        else {
          $scope.isTrue=false;
        }
      }

      $scope.clickButtons=[
        {text:"Modified"},
        {text:"Novel"},
        {text:"Existing"}];

        var fragrances=[
          {name:"Modified"},
          {name:"Novel"},
          {name:"Existing"}];

          $scope.modelCheck={
            fragranceType:""
          };

$scope.check=function(){
          console.log($scope);
}
});

    }());
