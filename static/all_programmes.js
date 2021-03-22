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

    $scope.deleteProgramme = function(code) {
        // Send delete to server
        $http.delete("/programme/" + code).then(function(response) {
            // Refresh list of programmes
            $http.get("/programmes").then(function(response) {
                $scope.programmes = response.data;
            });
        });
    };

    $scope.new_programme = new Programme("", "");

    $scope.createProgramme = function() {
        // Send data to the server
        $http.post("/programmes", $scope.new_programme).then(function(response) {
            // Reset new_programme
            $scope.new_programme = new Programme("", "");
            // Refresh programme list
            $http.get("/programmes").then(function(response) {
                $scope.programmes = response.data;
            });
        });  
    };
});