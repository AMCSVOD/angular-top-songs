# Angular Top Songs

Thanks for taking the time to take our challenge. We're hoping you can prove that you're able to follow a few guidelines and deliver a simple, yet full featured application.

 
##Goals
We're hoping to learn more about your dev style and preferences. 
Feel free to import any libraries that may help you in completing this task. 
We value a sense of ownership, so if you'd prefer to swap out NPM for Bower/Yarn or pull in a CSS Framework/Utility library/etc, please do.
We set up a basic start for you in this repo, so feel free to clone/fork.
 
##Instructions
Our users, aside from loving our video streaming apps, are a big fan of music streaming.

We'd like you to make them a SPA (Single Page Application) where they can make a top 10 list.

As a user, I should be able to:
 
 - Search for songs by their title, their artist, or their album
 - Select songs that are found via search and add them to a *Top 10* list.
 - Name my top 10 list (i.e. Top 10 Songs from the Nineties)
 - Add a note and an image to each song in that playlist
 - Export that playlist as json (Example Below)
 
 ```
 {
    title: 'Top 10 70s Songs'
    songs: [
        {
            track: 'Down On The Corner'
            artist: 'Creedence Clearwater Revival'
            album: 'Willy And The Poor Boys',
            note: 'Love this song! Listened to it all of the time on my RV trip!'
            customImage: 'https://www.stitch.net/wp-content/uploads/2014/10/9.jpg' 
        },
        ...
    ]
 } 
 ```
 
## Requirements

 - Use Angular 1.x
 - When complete, deliver a publicly facing URL displaying your work and a link to it's corresponding the GitHub Repo.
 - You may use any method you want for song data, but we'd recommend one of the following
    - [The Angular Spotify Service](https://github.com/eddiemoore/angular-spotify)
    - [The Spotify Web API](https://developer.spotify.com/web-api/user-guide/)
    - [One of Spotify's sponsered Web API Wrappers](https://developer.spotify.com/web-api/code-examples/)
