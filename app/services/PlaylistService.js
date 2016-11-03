"use strict";
(function(){
    angular.module("MusicApp").service("PlaylistService", function(){
        var playlistItem;

        var getCurrentItem = function() {
            return playlistItem;
        }

        var setCurrentItem = function(item) {
            playlistItem = item;
        }

        return {
            getCurrentItem: getCurrentItem,
            setCurrentItem: setCurrentItem
        }
    })
    
})();
