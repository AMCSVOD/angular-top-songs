/**
 * Created by Mtui on 11/2/16.
 */

"use strict";

(function() {
    angular.module("MusicApp").controller("HomeController", ["$scope", "Spotify", function($scope, Spotify) {

        $scope.submit = function() {
            var searchTerm = $scope.searchTerm;

            if(searchTerm !== '') {


            }
        }

        function getType() {
            var searchType = document.getElementById("searchType");

            switch(searchType) {
                case "Song":
                    //logic

                    break;
                case "Album":
                    //logic

                    break;
                case "Artist":
                    //logic
                    
                    break;
            }
        }

    }]);
})();
