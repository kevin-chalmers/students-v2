"use strict";

var mainApp = angular.module("mainApp", []);

mainApp.controller("moduleController", function($scope, $http) {
    $scope.modules = [
        new Module("000", "Test Module 1"),
        new Module("001", "Test Module 2"),
        new Module("002", "Test Module 3")
    ];
});