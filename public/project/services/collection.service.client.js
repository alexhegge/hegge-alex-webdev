
(function () {
    angular
        .module("BeerWebsiteMaker")
        .factory("collectionService", collectionService);

    function collectionService($http) {

        var api = {
            "findCollectionsByUser": findCollectionsByUser,
            "createCollection": createCollection,
            "findCollectionById": findCollectionById,
            "updateCollection": updateCollection,
            "deleteCollection": deleteCollection,
            "addBrewery": addBrewery,
            "deleteBrewery": deleteBrewery
        };
        return api;

        this.findCollectionsByUser = findCollectionsByUser;
        this.createCollection = createCollection;
        this.findCollectionById = findCollectionById;
        this.updateCollection = updateCollection;
        this.deleteCollection = deleteCollection;
        this.addBrewery = addBrewery;
        this.deleteBrewery = deleteBrewery;



        function findCollectionById(userId, collectionId) {
            var url = "/api/project/user/" + userId + "/collection/" + collectionId;
            return $http.get(url);
        }

        function createCollection(userId, collection) {
            var url = "/api/project/user/" + userId + "/collection";
            return $http.post(url, collection);
        }

        function findCollectionsByUser(userId) {
            //console.log(userId);
            var url = "/api/project/user/" + userId + "/collection";
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                });
        }

        function updateCollection(userId, collectionId, collection) {

            var url = "/api/project/user/" + userId + "/collection/" + collectionId;

            return $http.put(url, collection);
        }

        function deleteCollection(userId, collectionId) {
            var url = "/api/project/user/" + userId + "/collection/" + collectionId;
            return $http.delete(url);
        }

        function addBrewery(userId, collectionId, brewery) {
            var url = "/api/project/user/" + userId + "/collection/" + collectionId + "/brewery/" + brewery;
            return $http.put(url);
        }

        function deleteBrewery(userId, collectionId, breweryId) {
            var url = "/api/project/user/" + userId + "/collection/" + collectionId + "/brewery/" + breweryId;
            return $http.delete(url);
        }



    }
})();