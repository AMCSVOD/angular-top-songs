/**
 * Created by Mtui on 11/1/16.
 */
"use strict";
(function() {
    angular.module("MusicApp").controller("AuthController", ["$scope", "$location", "$route", function($scope, $location, $route) {
        $scope.submit = function() {
            if($scope.user.name === "suri" && $scope.user.password === "suri") {
               $location.path("/home");

            } else {
                var el = document.getElementsByClassName("message error")[0];
                el.textContent = "\"suri\" is the Key";
            }                
        }
    }])
})();




/**
 * Created by Mtui on 11/2/16.
 */

"use strict";

(function() {
    angular.module("MusicApp").controller("HomeController", ["$scope", function($scope) {

    }]);
})();
