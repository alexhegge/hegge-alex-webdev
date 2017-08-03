/**
 * Created by Alex on 7/23/17.
 */
(function () {
    angular
        .module("WebAppMaker")
        .factory("widgetService", widgetService);

    function widgetService($http) {


        var api = {
            "createWidget": createWidget,
            "findWidgetsByPageId": findWidgetsByPageId,
            "findWidgetById": findWidgetById,
            "updateWidget": updateWidget,
            "deleteWidget": deleteWidget,
        };
        return api;

        function findWidgetById(userId, websiteId, pageId, widgetId) {
            var url = "/api/assignment/user/" + userId + "/website/" + websiteId + "/page/" + pageId + "/widget/" + widgetId;
            return $http.get(url);
        }

        function createWidget(userId, websiteId, pageId, widget) {
            var url = "/api/assignment/user/" + userId + "/website/" + websiteId + "/page/" + pageId + "/widget";
            return $http.post(url, widget);
        }

        function findWidgetsByPageId(userId, websiteId, pageId) {

            var url = "/api/assignment/user/" + userId + "/website/" + websiteId + "/page/" + pageId;
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                });
        }

        function updateWidget(userId, websiteId, pageId, widget) {

            var url = "/api/assignment/user/" + userId + "/website/" + websiteId + "/page/" + pageId + "/widget";

            return $http.put(url, widget);
        }

        function deleteWidget(widgetId) {
            for(var w in widgets) {
                if(widgets[w]._id === widgetId) {
                    users.splice(w, 1);
                    return;
                }
            }

            return null;
        }



    }
})();