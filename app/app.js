"use strict";

var app = angular.module('MusicApp', ['ngRoute']);

app.controller("MusicController", function($scope, $route) {
    //Mock User DB
    $scope.$route = $route;
})

app.config(function($routeProvider) {
    $routeProvider
        .when('/',{
            templateUrl: 'app/views/AuthView.html',
            controller: 'AuthController'
        })
        .when('/home',{
            templateUrl: 'app/views/HomeView.html',
            controller: 'HomeController'
        })
        .otherwise({
            template: '<h1>Not Found</h1>'
        });
});

