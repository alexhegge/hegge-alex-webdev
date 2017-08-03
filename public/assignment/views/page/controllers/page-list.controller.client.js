/**
 * Created by Alex on 7/23/17.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("PageListController", PageListController);

    function PageListController($routeParams, pageService) {
        var model = this;

        model.websiteId = $routeParams.websiteId;
        model.userId = $routeParams.userId;

        function init() {
            pageService
                .findPagesByWebsiteId(model.userId, model.websiteId)
                .then(function(pages) {
                    model.pages = pages;
            });
        }
        init();

    }


})();