/**
 * Created by Alex on 7/23/17.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("WebsiteEditController", WebsiteEditController);

    function WebsiteEditController($routeParams, websiteService) {
        var model = this;

        model.websiteId = $routeParams["websiteId"];
        model.userId = $routeParams["userId"];

        model.updateWebsite = updateWebsite;
        model.deleteWebsite = deleteWebsite;

        function init() {
            model.websites = websiteService.findWebsitesByUser(model.userId);
            model.website = websiteService.findWebsiteById(model.websiteId);
        }
        init();

        function updateWebsite(website) {
            websiteService.updateWebsite(model.websiteId, website);
        }

        function deleteWebsite() {
            websiteService.deleteWebsite(model.websiteId);
        }
    }

})();