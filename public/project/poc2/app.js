(function () {
    angular
        .module("breweryApp", ["ngRoute"])
        .config(configuration)
        .controller("searchController", searchController)
        .controller("detailsController", detailsController)
        .service("beerService", beerService);

    function configuration($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "search.html",
                controller: "searchController",
                controllerAs: "model"
            })
            .when("/details/:breweryId", {
                templateUrl: "details.html",
                controller: "detailsController",
                controllerAs: "model"
            })
    }

    function detailsController($routeParams, beerService) {
        var model = this;

        breweryId = $routeParams.breweryId;

        console.log(breweryId);
        function init() {
            beerService
                .getBreweryDetails(breweryId)
                .then(renderBrewery);
            console.log(beerService.getBreweryDetails(breweryId));
        }
        init();

        function renderBrewery(brewery) {
            model.brewery = brewery.data;
            console.log(model.brewery);
        }

    }

    function searchController(beerService) {
        var model = this;

        model.getBrewery = getBrewery;

        function init() {
        }
        init();

        function getBrewery(breweryName) {
            beerService.getBrewery(breweryName)
                .then(renderBreweries);
        }
        function renderBreweries(breweries) {
            model.breweries = breweries.data;
            console.log(model.breweries)
        }

        function getBreweryDetails(breweryId) {
            $location.url("/details/" + breweryId);
        }
    }

    function beerService($http) {
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