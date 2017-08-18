
(function () {

    console.log("yo");

    angular
        .module("BeerWebsiteMaker", [])
        .service("beerService", beerService);

    function beerService($http) {
        this.searchBreweries = searchBreweries;
        this.getBreweryDetails = getBreweryDetails;
        this.getBeersFromBrewery = getBeersFromBrewery;

        function searchBreweries(breweryName) {
            return $http.get("/api/brewery/" + breweryName)
                .then(function (response) {
                    return response.data
                });
        }

        function getBreweryDetails(breweryId) {
            return $http.get("/api/brewery/details/" + breweryId)
                .then(function (response) {
                    return response.data
                });
        }



        function getBeersFromBrewery(breweryId) {
            return $http.get("/api/brewery/beer/" + breweryId)
                .then(function (response) {
                    return response.data
                });
        }


    }


/**
        var api = {
            searchBreweries: searchBreweries,
            getBreweryDetails: getBreweryDetails,
            getBeersFromBrewery: getBeersFromBrewery
        };
        return api;

        //this.searchBreweries = searchBreweries;
        //this.getBreweryDetails = getBreweryDetails;
        //this.getBeersFromBrewery getBeersFromBrewery;

        console.log("hii");

        //var request = require('request');

        var breweryList = "https://api.brewerydb.com/v2/breweries?name=*" +
            "breweryName*&key=fe31d4b0954ea218ae23fd99f5790eef&format=json";
        var breweryDetails = "https://api.brewerydb.com/v2/brewery/" +
            "breweryId?key=fe31d4b0954ea218ae23fd99f5790eef&format=json";
        var breweryBeers = "https://api.brewerydb.com/v2/brewery/" +
            "breweryId/beers?key=fe31d4b0954ea218ae23fd99f5790eef&format=json";

        function searchBreweries(breweryName) {
            var url = breweryList.replace("breweryName", breweryName);
            return $http.get(url);
        }

        function getBreweryDetails(breweryId) {
            var url = breweryDetails.replace("breweryId", breweryId);
            return $http.get(url)
        }

        function getBeersFromBrewery(breweryId) {
            var url = breweryBeers.replace("breweryId", breweryId);
            return $http.get(url)
        }
**/
/**
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


        function searchBreweries(req, res) {
            var breweryName = req.params.breweryName;
            var url = "https://api.brewerydb.com/v2/breweries?name=*" +
                breweryName + "*&key=fe31d4b0954ea218ae23fd99f5790eef&format=json";
            request(url, function(error, response, body) {
                if (!error && response.statusCode === 200) {
                    res.send(body);
                }
            });
        }
 **/

})