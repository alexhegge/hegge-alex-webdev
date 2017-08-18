
(function () {
    angular
        .module("BeerWebsiteMaker")
        .controller("CollectionEditController", CollectionEditController);

    function CollectionEditController($location, $routeParams, collectionService) {
        var model = this;

        model.collectionId = $routeParams["collectionId"];
        model.userId = $routeParams["userId"];

        model.deleteCollection = deleteCollection;
        model.updateCollection = updateCollection;
        model.createCollection= createCollection;

        function init() {
            model.collectionss = collectionService.findCollectionsByUser(model.userId);
            model.collection = collectionService.findCollectionById(model.collectionId);
        }
        init();

        function deleteCollection(collection) {
            collectionService
                .deleteCollection(model.userId, collection.collection._id)
                .then(function (status) {
                    $location.url("/user/"+model.userId+"/collection");
                });
        }


        function updateCollection(collection) {
            collectionService
                .updateCollection(model.userId, model.collectionId, collection)
                .then(function () {
                    $location.url("/user/" + model.userId + "/collection")
                });
        }
        /**
         function createWebsite(website) {
            website.developerId = model.userId;
            websiteService.createWebsite(website);
         $location.url('/user/'+model.userId+'/website');
         }

**/
    }

})();