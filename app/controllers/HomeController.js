/**
 * Created by Mtui on 11/2/16.
 */

"use strict";

(function() {
    angular.module("MusicApp").controller("HomeController", ["$scope", "Spotify", function($scope, Spotify) {

        $scope.submit = function() {
            var searchTerm = $scope.searchTerm;
            if(searchTerm !== '') {
               debugger;
            }

        }

    }]);
})();
