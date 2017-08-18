(function () {
    angular
        .module("breweryApp", ["ngRoute"])
        .config(configuration)
        .controller("searchController", searchController)
        .controller("detailsController", detailsController)
        .controller("beerController", beerController)
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
            .when("/beer/:breweryId", {
                templateUrl: "beer.html",
                controller: "beerController",
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
            console.log(beerService.getBeersFromBrewery(breweryId));
        }
        init();

        function renderBrewery(brewery) {
            model.brewery = brewery.data;
            console.log(model.brewery);
        }

    }

    function beerController($routeParams, beerService) {
        var model = this;

        breweryId = $routeParams.breweryId;

        console.log(breweryId);
        function init() {
            beerService
                .getBeersFromBrewery(breweryId)
                .then(renderBeers);
            console.log("we made it!");
            console.log(beerService.getBeersFromBrewery(breweryId));
        }
        init();

        function renderBeers(beers) {
            model.beers = beers.data;
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

    function beerServices($http) {
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
            return $http.get("/api/brewery/beer/" + breweryId)
                .then(function (response) {
                    return response.data
                });
        }


    }
})();