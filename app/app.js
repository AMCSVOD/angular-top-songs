"use strict";

var app = angular.module('MusicApp', ['ngRoute']);

app.controller("MusicController", function($scope) {
    
})

app.config(function($routeProvider) {
    $routeProvider
        .when('/',{
            templateUrl: 'app/views/AuthView.html',
            controller: 'AuthController'
        })
        .when('/test',{
            template: '<h1>Test</h1><a href="#/">Back</a>'
        })
        .otherwise({
            template: '<h1>Not Found</h1>'
        });
});

