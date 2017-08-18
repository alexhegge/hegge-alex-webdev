(function () {

    angular
        .module("BeerWebsiteMaker")
        .controller("ProfileController", ProfileController);

    function ProfileController($routeParams, userService, $location) {
        var model = this;
        var userId = $routeParams["userId"];

        model.updateUser = updateUser;
        model.deleteUser = deleteUser;

        function init() {
            userService.findUserById(userId)
                .then(function (response) {
                    model.user = response.data
                })
        }
        init();

        function updateUser(user) {
            userService.updateUser(userId, user);
        }

        function deleteUser(user) {
            userService
                .deleteUser(user._id)
                .then(function (response){
                    if(response.data === "1"){
                        $location.url("#!/login");
                    }
                });
        }
    }

})();