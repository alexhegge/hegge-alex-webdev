/**
 * Created by Alex on 7/23/17.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("WidgetEditController", WidgetEditController);

    function WidgetEditController($routeParams, widgetService) {
        var model = this;

        model.updateWidget = updateWebsite;
        model.deleteWidget = deleteWebsite;

        model.websiteId = $routeParams.websiteId;
        model.userId = $routeParams.userId;
        model.pageId = $routeParams.pageId;
        model.widgetId = $routeParams.widgetId;


        function init() {
            model.widget = widgetService.findWidgetById(model.widgetId);
        }
        init();

        function updateWidget() {
            widgetService.updateWidget(model.widgetId, model.widget);
        }

        function deleteWidget() {
            widgetService.deleteWidget(model.widgetId);
        }
    }

})();