(function () {
    angular
        .module("WebAppMaker")
        .controller("WidgetListController", WidgetListController);

    function WidgetListController($routeParams, widgetService, $sce) {
        var model = this;

        model.pageId = $routeParams.pageId;
        model.websiteId= $routeParams.websiteId;
        model.userId = $routeParams.userId;

        this.trustHtmlContent = trustHtmlContent;
        this.trustUrlResource = trustUrlResource;
        this.getWidgetIncludeUrl = getWidgetIncludeUrl;


        function init() {
            widgetService.findWidgetsByPageId(model.userId, model.websiteId, model.pageId)
                .then(function(widgets) {
                    model.widgets = widgets;
                });
        }
        init();


        function trustUrlResource(url) {
            console.log(url);
            var youtubeUrl = "https://www.youtube.com/embed/";
            var urlParts = url.split("/");
            youtubeUrl += urlParts[urlParts.length-1];
            return $sce.trustAsResourceUrl(youtubeUrl);
        }

        function trustHtmlContent(htmlContent) {
            return $sce.trustAsHtml(htmlContent);
        }

        function getWidgetIncludeUrl(widgetType) {
            return "views/widget/templates/widgets/widget-" + widget.widgetType + ".view.client.html";
        }

    }
})();

