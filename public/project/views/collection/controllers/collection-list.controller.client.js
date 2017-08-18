(function () {
    angular
        .module("BeerWebsiteMaker")
        .controller("BeerListController", BeerListController);

    function BeerListController($routeParams, collectionService) {
        var model = this;

        model.userId = $routeParams['userId'];

        function init() {
            collectionService.findCollectionsByUser(model.userId)
                .then(function (collections) {
                    model.collections = collections;
                });
        }
        init();
    }
})();