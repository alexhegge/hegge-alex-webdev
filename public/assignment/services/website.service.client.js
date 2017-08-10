
(function () {
    angular
        .module("WebAppMaker")
        .factory("websiteService", websiteService);

    function websiteService($http) {

        var api = {
            "findWebsitesByUser": findWebsitesByUser,
            "createWebsite": createWebsite,
            "findWebsiteById": findWebsiteById,
            "updateWebsite": updateWebsite,
            "deleteWebsite": deleteWebsite
        };
        return api;


        var websites = [
            { "_id": "123", "name": "Facebook",    "developerId": "456", "description": "Lorem" },
            { "_id": "234", "name": "Tweeter",     "developerId": "456", "description": "Lorem" },
            { "_id": "456", "name": "Gizmodo",     "developerId": "456", "description": "Lorem" },
            { "_id": "890", "name": "Go",          "developerId": "123", "description": "Lorem" },
            { "_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem" },
            { "_id": "678", "name": "Checkers",    "developerId": "123", "description": "Lorem" },
            { "_id": "789", "name": "Chess",       "developerId": "234", "description": "Lorem" }
        ];

        this.findWebsitesByUser = findWebsitesByUser;
        this.createWebsite = createWebsite;
        this.findWebsiteById = findWebsiteById;
        this.updateWebsite = updateWebsite;
        this.deleteWebsite = deleteWebsite;



        function findWebsiteById(userId, websiteId) {
            var url = "/api/assignment/user/" + userId + "/website/" + websiteId;
            return $http.get(url);
        }

        function createWebsite(userId, website) {
            var url = "/api/assignment/user/" + userId + "/website";
            return $http.post(url, website);
        }

        function findWebsitesByUser(userId) {
            //console.log(userId);
            var url = "/api/assignment/user/" + userId + "/website";
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                });
        }

        function updateWebsite(userId, websiteId, website) {

            var url = "/api/assignment/user/" + userId + "/website/" + websiteId;

            return $http.put(url, website);
        }

        function deleteWebsite(userId, websiteId) {
            var url = "/api/user/" + userId + "/website/" + websiteId;
            return $http.delete(url);
        }



    }
})();