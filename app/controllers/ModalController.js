"use strict";

(function() {
    angular.module("MusicApp").controller(
        "ModalController", function($scope, $rootScope, PlaylistService) {

            $scope.currentItem = PlaylistService.getCurrentItem();
            $scope.playlistJson = PlaylistService.getExportJson();

            $scope.addToPlaylistHandler = function() {

                if(PlaylistService.getCurrentItem()) {

                    $scope.currentItem.note = ($scope.track && $scope.track.note) ?  $scope.track.note : "";
                    $scope.currentItem.imageUrl = ($scope.track && $scope.track.image) ? $scope.track.image : $scope.currentItem.album.images[2].url;
                    PlaylistService.setCurrentItem($scope.currentItem);
                    $rootScope.$broadcast("updatePlaylist");
                }

                $scope.closeModal();
            }

            $scope.closeModal = function() {
                $rootScope.modalInstance.close();
            }
        });

})();
