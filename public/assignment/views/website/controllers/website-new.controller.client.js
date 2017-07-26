/**
 * Created by Alex on 7/23/17.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("WebsiteNewController", WebsiteNewController);

    function WebsiteNewController($routeParams, websiteService) {
        var model = this;

        model.userId = $routeParams.userId;

        model.addWebsite = addWebsite;

        function init() {
            model.websites = websiteService.findWebsitesByUser(model.websiteId);
        }
        init();

        function addWebsite() {
            model.website = websiteService.createWebsite(model.userId, model.website);
        }

    }

})();