(function () {
    console.log("yoooo");
    angular
        .module("BeerWebsiteMaker")
        .controller("BrewerySearchController", BrewerySearchController);

    console.log("hihihihi");

        function BrewerySearchController(beerService) {

            console.log("baljlijfoiwjefoiwj");
            var model = this;

            model.searchBreweries = searchBreweries;

            function init() {
            }
            init();

            function searchBreweries(breweryName) {
                beerService.searchBreweries(breweryName)
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
/*
    function BrewerySearchController($location, $routeParams, searchService) {
        var model = this;
        //model.currentUser = currentUser;
        //model.searchTerm = $routeParams['searchTerm'];
        //model.searchNewMovies = searchNewMovies;
        //model.selectMovie = selectMovie;
        //model.goBack = goBack;

        model.breweries = [];

        model.searchBreweries = searchBreweries;
        model.getBreweryDetails = getBreweryDetails;

        function init() {

        }
        init();
        function searchBreweries(breweryName) {
            searchService.searchBreweries(breweryName)
                .then(renderBreweries);
        }
        function renderBreweries(breweries) {
            model.breweries = breweries.data;
            console.log(model.breweries)
        }

        function getBreweryDetails(breweryId) {
            $location.url("/details/" + breweryId);
        }
        */
/*
    //function BrewerySearchController(searchService, $location) {
        var model = this;

        console.log("hi");
        model.searchBreweries = searchBreweries;

        function init() {
        }
        init();

        function searchBreweries(breweryName) {
            searchService.searchBreweries(breweryName)
                .then(renderBreweries);
        }
        function renderBreweries(breweries) {
            model.breweries = breweries.data;
            console.log(model.breweries)
        }

        function getBreweryDetails(breweryId) {
            $location.url("/details/" + breweryId);
        }
    }])
*/
})();