/**
 * Created by Alex on 8/2/17.
 */
(function () {
    angular
        .module("WebAppMakerDirectives", [])
        .directive("WidgetList", WidgetListDirective);

    function WidgetListDirective($routeParams, $http) {
        function linkFunction(scope, element) {
            var widgetList = element.find("ul");
            var initial = -1;
            var final = -1;
            widgetList.sortable({
                start: function (event, ui) {
                    initial = $(ui.item).index();
                },
                stop: function (event, ui) {
                    final = $(ui.item).index();
                    console.log([initial, final]);
                    $http.put("/page/" + $routeParams.pageId + "/widget?initial=" + initial + "&final=" + final);

                }
            })
        }

        return {
            templateUrl: "../views/widget/templates/widget-list.component.client.html",
            link: linkFunction
        }
    }
    }
)

