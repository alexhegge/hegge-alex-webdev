/**
 * Created by Alex on 7/23/17.
 */
(function () {
    angular
        .module("WebAppMaker")
        .factory("pageService", pageService);

    function pageService($http) {


        var api = {
            "createPage": createPage,
            "findPagesByWebsiteId": findPagesByWebsiteId,
            "findPageById": findPageById,
            "updatePage": updatePage,
            "deletePage": deletePage
        };
        return api;

        function createPage(userId, websiteId, page) {
            var url = "/api/assignment/user/" + userId + "/website/" + websiteId + "/page";
            return $http.post(url, page);

        }

        function findPagesByWebsiteId(userId, websiteId){
            var url = "/api/assignment/user/" + userId + "/website/" + websiteId + "/page";
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                });

        }

        function findPageById(userId, websiteId, pageId){
            var url = "/api/assignment/user/" + userId + "/website/" + websiteId + "/page/" + pageId;
            return $http.get(url);

        }

        function updatePage(userId, websiteId, pageId, page){

            var url = "/api/assignment/user/" + userId + "/website/" + websiteId + "/page/" + pageId;

            return $http.put(url, page);
        }

        function deletePage(pageId){
            for(var p in pages) {
                if(pages[p]._id === pageId) {
                    pages.splice(p, 1);
                    return;
                }
            }

            return null;

        }

    }
})();