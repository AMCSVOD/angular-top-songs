/**
 * Created by Mtui on 11/2/16.
 */
(function configs() {
    angular.module("MusicApp").factory('Configs', function() {
        return {
            SPOTYIFY_CLIENT_ID: "ab321fcfb1d747aca65312ad1080a824",
            SPOTIFY_CLIENT_SECERT: "958937ff948445eebde01d699cac2ba7",
            USER: "suri",
            PASSWORD: "suri" //would never obviously be here!!!!
        }
    });
})()
