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

        model.deleteWebsite = deleteWebsite;
        model.updateWebsite = updateWebsite;
        //model.createWebsite = createWebsite;

        function init() {
            model.websites = websiteService.findWebsitesByUser(model.userId);
            model.website = websiteService.findWebsiteById(model.websiteId);
        }
        init();

        function deleteWebsite(website) {
            websiteService
                .deleteWebsite(model.userId, website.website._id)
                .then(function (status) {
                    $location.url("/user/"+model.userId+"/website");
                });
        }


        function updateWebsite(website) {
            websiteService
                .updateWebsite(model.userId, model.websiteId, website)
                .then(function () {
                    $location.url("/user/" + model.userId + "/website")
                });
        }
/*
        function createWebsite(website) {
            website.developerId = model.userId;
            websiteService.createWebsite(website);
            $location.url('/user/'+model.userId+'/website');
        }
        */

    }

})();