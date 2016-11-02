/**
 * Created by Mtui on 11/1/16.
 */
"use strict";

(function() {
    angular.module("MusicApp").controller("AuthController", ["$scope", "$location", "$rootScope", "Configs",  function($scope, $location, $rootScope, Configs) {
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
