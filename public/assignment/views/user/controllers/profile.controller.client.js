(function () {

    angular
        .module("WebAppMaker")
        .controller("ProfileController", ProfileController);

    function ProfileController($routeParams, userService, $location) {
        var model = this;
        model.userId = $routeParams["userId"];

        model.updateUser = updateUser;
        model.deleteUser = deleteUser;

        function init() {
            model.user = userService.findUserById(model.userId)
        }
        init();

        function updateUser() {
            userService.updateUser(model.userId, model.user);
        }

        function deleteUser() {
            userService.deleteUser(model.user._id);
            $location.url("/login");
        }
    }

})();