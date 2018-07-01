require("dotenv").config();
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var axios = require("axios")
var keys = require("./keys.js")

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);
var command = process.argv[2]

function days() {
    var params = { "Jess69773268": 'nodejs' };
    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (!error) {
            console.log(tweets);
        }
    });

}
days();


var spotifying = function (media) {
    spotify.search({ type: 'track', query: media, limit: 10 }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        // console.log(data.tracks.items); 
        for (var i = 0; i < data.tracks.items.length; i++) {
            console.log("\n-----------ONE RESULT---------------\n");
            console.log("Artist: " + data.tracks.items[i].album.artists[0].name);
            console.log("Song's name: " + data.tracks.items[i].name);
            console.log("Link (from Spotify): " + data.tracks.items[i].external_urls.spotify);
            console.log("Album: " + data.tracks.items[i].album.name);
            console.log("\n-----------END OF RESULT---------------\n");
        }
    });
};
