"use strict";

var mainApp = angular.module("mainApp", []);

mainApp.controller("programmeController", function($scope, $http) {
    document.getElementById("selected").style.display = "none";

    $http.get("/programmes").then(function(response) {
        $scope.programmes = response.data;
    });

    $scope.selectProgramme = function(code) {
        $http.get("/programme/" + code).then(function(response) {
            $scope.selectedProgramme = response.data;
            document.getElementById("selected").style.display = "block";
        });
    };
});