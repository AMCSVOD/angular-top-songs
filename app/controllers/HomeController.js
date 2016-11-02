/**
 * Created by Mtui on 11/2/16.
 */

"use strict";

(function() {
    angular.module("MusicApp").controller("HomeController", ["$scope", "Spotify", "$rootScope", "$window", "Configs", function($scope, Spotify, $rootScope, Configs, $window) {

        var displayData = null;

        if ($rootScope.user === undefined) {
            window.location.href = "/";
        }

        $scope.submit = function() {
            var searchTerm = $scope.searchTerm;

            if(searchTerm !== '') {
                Spotify.search(searchTerm, getType()).then(function (data) {
                    console.log(data);
                });
            }
        };

        function getType() {
            return document.getElementById("searchType").value;
        }

    }]);
})();
