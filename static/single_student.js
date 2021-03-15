"use strict";

var mainApp = angular.module("mainApp", []);

mainApp.controller("studentController", function($scope, $http) {
    document.getElementById("selected").style.display = "none";

    $scope.getStudent = function(id) {
        $http.get("/student/" + id).then(function(response) {
            $scope.selectedStudent = response.data;
            document.getElementById("selected").style.display = "block";
        });
    };
});