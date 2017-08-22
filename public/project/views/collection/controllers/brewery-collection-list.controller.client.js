(function () {
    angular
        .module("BeerWebsiteMaker")
        .controller("BeerListController", BeerListController);

    function BeerListController($routeParams, collectionService) {
        var model = this;
        var userId = $routeParams["userId"];

        model.likedBreweries = likedBreweries;

        function init() {
            collectionService.findCollectionsByUser(model.userId)
                .then(function (collections) {
                    model.collections = collections;
                });

            userService
                .findUserById(model.userId)
                .then(function(response) {
                    model.thisUser = response.data;

                var likedBreweries = [];
                for (var x in model.thisUser.likedBreweries) {
                    homeService
                        .getBreweryDetails(model.thisUser.likedBreweries[x])
                        .then(function (response) {
                            likedBreweries.push(response.data);
                        })
                }
                })

        }
        init();
    }
})();