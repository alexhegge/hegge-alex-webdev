(function () {
    angular
        .module('FFApp', [])
        .controller('FFController', FFController);

    function FFController($http) {
        var model = this;
        $http.get('/api/project_server/query/position/QB/')


            .then(renderPosition);

        function renderPosition(response) {
            model.position = response.data;
        }
    }
})();