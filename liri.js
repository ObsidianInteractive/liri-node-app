require("dotenv").config();

var myKeys = require('./keys.js');

request('./keys.js'), function(error, response, body) {
    if (!error && response.statusCode === 200) {
        console.log(myKeys);
    }
};

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

console.log(spotify);
