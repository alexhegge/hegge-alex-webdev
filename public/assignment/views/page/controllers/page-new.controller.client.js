/**
 * Created by Alex on 7/23/17.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("PageNewController", PageNewController);

    function PageNewController($routeParams, pageService) {
        var model = this;

        model.websiteId = $routeParams.websiteId;
        model.userId = $routeParams.userId;

        model.addPage = addPage;

        function init() {
            model.pages = pageService.findPagesByWebsiteId(model.userId, model.websiteId);
        }
        init();

        function addPage() {
            model.page = pageService.createPage(model.userId, model.websiteId, model.page);
        }

    }


})();