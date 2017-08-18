
(function () {
    angular
        .module("BeerWebsiteMaker")
        .controller("BeerNewController", BeerNewController);

    function BeerNewController($location, $routeParams, beerService) {
        var model = this;

        model.userId = $routeParams["userId"];

        model.createCollection = createCollection;

        function init() {
            beerService
                .findCollectionsByUser(model.userId)
                .then(function (collections) {
                    model.collections = collections;
                });
        }
        init();

        function createCollection(collection) {
            beerService.createCollection(model.userId, collection)
                .then(function (collection) {
                    $location.url("/user/"+ model.userId +"/collection");
                });
        }




    }

})();