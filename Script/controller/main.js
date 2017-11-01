
var nameApp = angular.module('nameApp', []);
nameApp.controller('NameCtrl', function ($scope){
    $scope.Message = "It the simplest setup for angular you can start over here";

    $scope.addName = function() {
        $scope.names.push($scope.enteredName);
        $scope.enteredName = '';
    };

});