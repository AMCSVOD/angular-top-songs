"use strict";
(function(){
    angular.module("MusicApp").service("PlaylistService", function(){
        var playlistItem;
        var playlistJson;

        const getCurrentItem = function() {
            return playlistItem;
        }

        const getExportJson = function() {
            return playlistJson;
        }

        const setCurrentItem = function(item) {
            playlistItem = item;
        }

        const setExportJson = function(json) {
            playlistJson = json;
        }

        return {
            getCurrentItem: getCurrentItem,
            setCurrentItem: setCurrentItem,
            setExportJson: setExportJson,
            getExportJson: getExportJson
        }
    })
    
})();
