"use strict";

var mainApp = angular.module("mainApp", []);

mainApp.controller("moduleController", function($scope, $http) {
    $http.get("/modules").then(function(response) {
        $scope.modules = response.data;
    });

    $scope.deleteModule = function(code) {
        // Send a delete message to node server
        // e.g. /module/CMP020L004
        $http.delete("/module/" + code).then(function(response) {
            // Refresh list of modules
            $http.get("/modules").then(function(response) {
                $scope.modules = response.data;
            });
        });
    };

    $scope.new_module = new Module("", "");

    $scope.createModule = function() {
        // Send new data to the server
        $http.post("/modules", $scope.new_module).then(function(response) {
            // Reset new module
            $scope.new_module = new Module("", "");
            // Refresh list of modules
            $http.get("/modules").then(function(response) {
                $scope.modules = response.data;
            });
        });
    };
});