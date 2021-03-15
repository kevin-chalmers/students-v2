"use strict";

var mainApp = angular.module("mainApp", []);

mainApp.controller("studentController", function($scope, $http) {
    $scope.students = [
        new Student("001", "A", "Student", new Programme("001", "Test Programme 1")),
        new Student("002", "Another", "Student", new Programme("002", "Test Programme 2"))
    ];
});