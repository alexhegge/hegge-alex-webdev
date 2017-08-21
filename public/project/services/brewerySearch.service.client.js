
(function () {

    console.log("yo");

    angular
        .module("BeerWebsiteMaker", [])
        .service("homeService", homeService);

    function homeService($http) {
        this.getBrewery = getBrewery;
        this.getBreweryDetails = getBreweryDetails;
        this.getBeersFromBrewery = getBeersFromBrewery;

        function getBrewery(breweryName) {
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
            return $http.get("/api/brewery/details/beer" + breweryId + '/beer');
        }


    }
})();