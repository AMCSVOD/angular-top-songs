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
    angular.module("MusicApp").controller("HomeController", ["$scope", "Spotify", "$rootScope", function($scope, Spotify, $rootScope) {

        if ($rootScope.user === undefined) {
            window.location.href = "/";
        }

        var type = null;

        $scope.displayData = [];
        $scope.playlist = [];

        $scope.itemClickHandler = function(item) {
            debugger;
        }

        $scope.submit = function() {
            var searchTerm = $scope.searchTerm;

            if(searchTerm !== '') {
                type = getType();

                Spotify.search(searchTerm, type).then(function (data) {
                    populateView(data);
                });
            }
        };

        function populateView(data) {
            var tempData = data[type+'s'].items;

            tempData.forEach(function(tempItem) {
                var names = Array.prototype.map.call(tempItem.artists, function(artist) {
                    return artist.name;
                });

                tempItem.finalArtists = names.join(", ");
            });

            $scope.displayData = tempData;
        }

        function getType() {
            return document.getElementById("searchType").value;
        }
    }]);
})();

/**
 * Created by Mtui on 11/2/16.
 */
"use strict";

(function() {
    angular.module("MusicApp").controller("Playlist", ["$scope", "Spotify", "$rootScope", "$window", "Configs", function($scope, Spotify, $rootScope, Configs, $window) {

    }])
})();


