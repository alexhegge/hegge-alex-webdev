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

        model.breweryId = $routeParams.breweryId;

        function init() {
            beerService
                .getBeersFromBrewery(model.breweryId)
                .then(function(response){
                    model.beer = response.data.brewery.beer;
                });
        }
        init();

    }

    function searchController(beerService) {
        var model = this;

        model.getBrewery = getBrewery;

        function init() {
            model.breweryName = null;
        }
        init();

        function getBrewery(breweryName) {
            beerService
                .getBrewery(model.breweryName)
                .then(function(response){
                    model.breweries = response.data.brewery.breweries.brewery
                });
        }
        function toDetails(breweryId) {
            $location.url("/details/" + breweryId);
        }
    }

    function beerService($http) {
        this.getBrewery = getBrewery;
        this.getBeersFromBrewery = getBeersFromBrewery;

        function getBrewery(breweryName) {
            return $http.get("/api/brewery/" + breweryName);
        }

        function getBeersFromBrewery(breweryId) {
            return $http.get("/api/brewery/details" + breweryId);
        }


    }
})();