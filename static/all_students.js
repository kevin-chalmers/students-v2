"use strict";

var mainApp = angular.module("mainApp", []);

mainApp.controller("studentController", function($scope, $http) {
    $http.get("/students").then(function(response) {
        $scope.students = response.data;
    });
});