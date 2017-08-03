/**
 * Created by Alex on 7/23/17.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("WidgetNewController", WidgetNewController);

    function WidgetNewController($routeParams, widgetService) {
        var model = this;

        model.userId = $routeParams.userId;
        model.websiteId = $routeParams.websiteId;
        model.pageId = $routeParams.pageId;

        model.addWidget = addWidget;

        function init() {
            model.widget = widgetService.findWidgetsByPageId(model.pageId);
        }
        init();

        function addWidget() {
            model.widget = widgetService.createWidget(model.pageId, widget);
        }

    }

})();