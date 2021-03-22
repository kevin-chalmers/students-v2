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
});