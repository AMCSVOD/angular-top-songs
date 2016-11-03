"use strict";

var app = angular.module('MusicApp', ['ngRoute', 'spotify','ui.bootstrap','ngAnimate']);

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

