require("dotenv").config();

var Twitter = require('twitter');

var Spotify = require('node-spotify-api');
var axios = require("axios")

var keys = require("./keys.js")

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

