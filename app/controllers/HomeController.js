/**
 * Created by Mtui on 11/2/16.
 */

"use strict";

(function() {
    angular.module("MusicApp").controller(
        "HomeController",
        ["$scope", "Spotify", "$rootScope", "$uibModal", "PlaylistService", function($scope, Spotify, $rootScope, $uibModal, PlaylistService) {

        if ($rootScope.user === undefined) {
            window.location.href = "/";
        }

        const MAX_PLAYLIST = 10;
        var type = null;
            
        $scope.currentSelectedItem = null;
        $scope.displayData = [];
        $scope.playlist = [];
        $scope.playlistName = "";
        $scope.showPlaylist =  false;

        $scope.itemClickHandler = function(item) {
            if(!$scope.showPlaylist) {
                showErrorModal();
            } else {
                $scope.currentSelectedItem = item;
                PlaylistService.setCurrentItem(item);
                addSongToPlaylist();
            }
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

        $scope.newPlaylist = function() {
           $scope.resetPlaylist();
            $scope.showPlaylist = true;
        }
        
        $scope.resetPlaylist = function() {
            $scope.playlist = [];
            $scope.showPlaylist = false;
        }

        $scope.closeErrorModal = function() {
            $rootScope.modalInstance.close();
        }

        $scope.removeItem = function(item) {
            var tempArray = [];
            for(var i = 0; i < $scope.playlist.length; i++) {
                if(item.uri !== $scope.playlist.uri)
                    tempArray[i] = $scope.playlist[i];
            }

            $scope.playlist = tempArray;
            tempArray = null;
        }

        $rootScope.$on("updatePlaylist", function() {
            updatePlaylistFromModal();
        });

        function updatePlaylistFromModal() {
          $scope.playlist.push(PlaylistService.getCurrentItem());
        }

        function addSongToPlaylist() {
            console.log("currentSelected:"+ $scope.currentSelectedItem);

            $rootScope.modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title-top',
                ariaDescribedBy: 'modal-body-top',
                templateUrl: 'addSong.html',
                controller: 'ModalController',
                size: 'lg'
            });
        }

        function showErrorModal() {
            $rootScope.modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title-top',
                ariaDescribedBy: 'modal-body-top',
                templateUrl: 'errorModal.html',
                controller: 'HomeController',
                size: 'lg'
            });
        }

        function populateView(data) {
            var tempData = data[type+'s'].items;

            tempData.forEach(function(tempItem) {
                var names = Array.prototype.map.call(tempItem.artists, function(artist) {
                    return artist.name;
                });

                tempItem.allArtists = names.join(", ");
            });

            $scope.displayData = tempData;
        }

        function getType() {
            return document.getElementById("searchType").value;
        }
    }]);

    
})();
