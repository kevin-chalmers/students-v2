"use strict";

var mainApp = angular.module("mainApp", []);

mainApp.controller("studentController", function($scope, $http) {
    document.getElementById("selected").style.display = "none";
    
    $http.get("/students").then(function(response) {
        $scope.students = response.data;
    });

    $scope.selectStudent = function(id) {
        $http.get("/student/" + id).then(function(response) {
            $scope.selectedStudent = response.data;
            document.getElementById("selected").style.display = "block";
        });
    };  
});