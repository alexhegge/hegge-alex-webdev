/**
 * Created by Alex on 7/23/17.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("WebsiteNewController", WebsiteNewController);

    function WebsiteNewController($location, $routeParams, websiteService) {
        var model = this;

        model.userId = $routeParams["userId"];

        model.createWebsite = createWebsite;

        function init() {
            websiteService
                .findWebsitesByUser(model.userId)
                .then(function (websites) {
                    model.websites = websites;
                });
        }
        init();

        function createWebsite(website) {
            websiteService.createWebsite(model.userId, website)
                .then(function (website) {
                    $location.url("/user/"+ model.userId +"/website");
                });
        }




    }

})();