
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




        function findWebsiteById(userId, websiteId) {
            var url = "/api/assignment/user/" + userId + "/website/" + websiteId;
            return $http.get(url);
        }

        function createWebsite(userId, website) {
            var url = "/api/assignment/user/" + userId + "/website";
            return $http.post(url, website);
        }

        function findWebsitesByUser(userId) {

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

        function deleteWebsite(websiteId) {
            for(var w in websites) {
                if(websites[w]._id === websiteId) {
                    users.splice(w, 1);
                    return;
                }
            }

            return null;
        }



    }
})();