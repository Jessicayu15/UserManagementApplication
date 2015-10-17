/**
 * Created by Jessica on 10/15/2015.
 */
var myApp = angular.module('userManagementApp',['ngResource']);

myApp.controller('userManagementCtrl',['$scope','myService',function($scope,myService){
    myService.resourceTest.get().$promise.then(
        function(data){
            $scope.datas=data;
            myService.datas=$scope.datas;
            $scope.initiaDatas = angular.copy(myService.datas);
        },
        function(error){
            alert('this is an error')
        }
    );
    $scope.initiaDatas=angular.copy(myService.datas);
    $scope.editSelectedFlag=myService.editSelectedFlag;
    $scope.checkboxModel={
        value1:true,
        value2:false
    }
    $scope.deleteData= function (index) {
        if (confirm("Are you sure?") == true) {
            myService.delete(index);
            $scope.initiaDatas=angular.copy(myService.datas);
        } else {
        }
    };

    $scope.editData=function(index){
        myService.edit(index);
    };

    $scope.saveData=function(index){
        myService.save(index);
        $scope.initiaDatas=angular.copy(myService.datas);
    };

    $scope.cancel=function(index){
        $scope.datas[index].editFlag=false;
        angular.copy($scope.initiaDatas[index],$scope.datas[index])
    }

    $scope.editSelected=function(){
        $scope.editSelectedFlag= true;
    };

    $scope.saveSelected=function(){
        $scope.editSelectedFlag= false;
        $scope.initiaDatas=angular.copy(myService.datas);
    };

    $scope.cancelSelected=function(){
        $scope.editSelectedFlag= false;
        angular.copy($scope.initiaDatas,$scope.datas);
    }
}])
