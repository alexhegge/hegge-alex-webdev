/**
 * Created by Alex on 7/23/17.
 */
(function () {
    angular
        .module("BeerWebsiteMaker")
        .controller("CollectionNewController", CollectionNewController);

    function CollectionNewController($location, $routeParams, collectionService) {
        var model = this;

        model.userId = $routeParams["userId"];

        model.createCollection = createCollection;

        function init() {
            collectionService
                .findCollectionsByUser(model.userId)
                .then(function (collections) {
                    model.collections = collections;
                });
        }
        init();

        function createCollection(collection) {
            collectionService.createCollection(model.userId, collection)
                .then(function (collection) {
                    $location.url("/user/"+ model.userId +"/collection");
                });
        }




    }

})();