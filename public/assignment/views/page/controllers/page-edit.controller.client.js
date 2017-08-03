/**
 * Created by Alex on 7/23/17.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("PageEditController", PageEditController);

    function PageEditController($routeParams, pageService) {
        var model = this;

        model.userId = $routeParams.userId;
        model.websiteId = $routeParams.websiteId;
        model.pageId= $routeParams.pageId;

        model.editPage = editPage;
        model.deletePage = deletePage;

        function init() {
            model.pages = pageService.findPagesByWebsiteId(model.userId, model.websiteId);
            model.page = pageService.findPageById(model.userId, model.websiteId, model.pageId)
        }
        init();

        function editPage() {
            model.page = pageService.updatePage(model.userId, model.websiteId, model.pageId, model.page);
        }

        function deletePage() {
            pageService.deletePage(model.pageId);
        }

    }

})();