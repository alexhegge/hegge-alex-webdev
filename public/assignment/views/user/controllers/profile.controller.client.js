(function () {

    angular
        .module("WebAppMaker")
        .controller("ProfileController", ProfileController);

    function ProfileController($routeParams, userService, $location) {
        var model = this;
        var userId = $routeParams["userId"];

        model.updateUser = updateUser;
        model.deleteUser = deleteUser;

        function init() {
            var promise = userService.findUserById(userId);
            promise.then(function(response) {
                model.user = response.data;
            })
        }
        init();

        function updateUser(user) {
            userService.updateUser(user._id, user);
        }

        function deleteUser(user) {
            userService.deleteUser(user._id);
            $location.url("/login");
        }
    }

})();