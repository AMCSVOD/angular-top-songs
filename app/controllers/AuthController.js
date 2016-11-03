/**
 * Created by Mtui on 11/1/16.
 */
"use strict";

(function() {
    angular.module("MusicApp").controller(
        "AuthController",
        ["$scope", "$location", "$rootScope", "Configs", function($scope, $location, $rootScope, Configs) {

        $scope.submit = function() {
            if($scope.user.name === Configs.USER && $scope.user.password === Configs.PASSWORD) {
                $rootScope.user = $scope.user;
                $location.path("/home");
            } else {
                var el = document.getElementsByClassName("message error")[0];
                el.textContent = "\""+Configs.PASSWORD+"\" is the key!";
            }
        }

    }]);
})();



