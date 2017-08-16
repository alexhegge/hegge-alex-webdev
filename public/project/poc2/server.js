var app = require('../../../express');
var request = require('request');

module.exports = {
    0: getBrewery,
    1: getBreweryDetails,
    2: getBeersFromBrewery
};

var key = process.env.BREWERY_API_KEY;

// http handlers
app.get("/api/brewery/:breweryName", getBrewery);
app.get("/api/brewery/details/:breweryId", getBreweryDetails);
app.get("/api/brewery/details/beer/:breweryId/beer", getBeersFromBrewery);

function getBeersFromBrewery(req, res) {
    var breweryId = req.params.breweryId;

    var url = "https://api.brewerydb.com/v2/brewery/" + breweryId
        + "/beers?key=fe31d4b0954ea218ae23fd99f5790eef&format=json";
    request(url, function(error, response, body) {
        if (!error && response.statusCode === 200) {
            res.send(body);
        }
    });
}

function getBreweryDetails(req, res) {
    var breweryId = req.params.breweryId;

    console.log(breweryId);
    console.log("hi");
    var url = "https://api.brewerydb.com/v2/brewery/" + breweryId + "?key=fe31d4b0954ea218ae23fd99f5790eef&format=json";
    console.log(url);
    request(url, function(error, response, body) {
        if (!error && response.statusCode === 200) {
            res.send(body);
        }
    });
}


function getBrewery(req, res) {
    var breweryName = req.params.breweryName;
    var url = "https://api.brewerydb.com/v2/breweries?name=*" +
        breweryName + "*&key=fe31d4b0954ea218ae23fd99f5790eef&format=json";
    request(url, function(error, response, body) {
        if (!error && response.statusCode === 200) {
            res.send(body);
        }
    });
}