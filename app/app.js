"use strict";

var app = angular.module('MusicApp', ['ngRoute', 'spotify']);

app.controller("MusicController", function($scope) {

})

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'app/views/AuthView.html',
            controller: 'AuthController'
        })
        .when('/home', {
            templateUrl: 'app/views/HomeView.html',
            controller: 'HomeController'
        })
        .otherwise({
            template: '<h1>Not Found</h1>'
        });
});

