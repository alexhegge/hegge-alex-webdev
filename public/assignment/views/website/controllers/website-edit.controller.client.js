/**
 * Created by Alex on 7/23/17.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("WebsiteEditController", WebsiteEditController);

    function WebsiteEditController($location, $routeParams, websiteService) {
        var model = this;

        model.websiteId = $routeParams["websiteId"];
        model.userId = $routeParams["userId"];

        //model.updateWebsite = updateWebsite;
        //model.deleteWebsite = deleteWebsite;

        function init() {
            websiteService.findWebsitesByUser(model.userId)
                .then(function (websites) {
                    model.websites = websites;
                });
            websiteService
                .findWebsiteById(model.userId, model.websiteId)
                .then(function (response) {
                    model.website = response.data;
                });
        }
        init();

        //function updateWebsite(website) {
        //    websiteService.updateWebsite(model.websiteId, website);
        //}

        //function deleteWebsite() {
        //    websiteService.deleteWebsite(model.websiteId);
        //}
    }

})();