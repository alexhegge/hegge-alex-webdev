(function() {
    angular
        .module("BreweryWebsite", ["ngRoute"])
        .config(Config);
    function Config($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "views/search/templates/search.html",
                controller: "SearchController",
                controllerAs: "model"
            })
            .when("/search", {
                templateUrl: "views/search/templates/search.html",
                controller: "SearchController",
                controllerAs: "model"
            })
            .when("/search/breweries", {
                templateUrl: "views/search/templates/breweries.html",
                controller: "BreweriesController",
                controllerAs: "model"
            })

            .when("/search/breweries/:breweryId", {
                templateUrl: "views/search/templates/beerDetails.html",
                controller: "BeerDetailsController",
                controllerAs: "model"
            })

            .when("/admin", {
                templateUrl: "views/users/templates/admin.html",
                controller: "AdminController",
                controllerAs: "model"
            })
            .when("/drinker", {
                templateUrl: "views/users/templates/drinker.html",
                controller: "DrinkerController",
                controllerAs: "model"
            })

    }
})();