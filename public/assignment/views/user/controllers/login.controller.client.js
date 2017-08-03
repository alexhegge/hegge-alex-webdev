(function () {

    angular
        .module("WebAppMaker")
        .controller("LoginController", LoginController);

    function LoginController($location, userService, $rootScope) {
        var model = this;

        model.login = login;

        function init() {

        }
        init();

        function login(user) {
            if(!user) {
                model.errorMessage = "User not found";
                return;
            }
            return userService.findUserByCredentials(user.username, user.password)

                .then(function (response) {
                    user = response.data;
                    if(user === null) {
                        model.errorMessage = "User not found";
                    } else {
                        $rootScope.currentUser = user;
                        $location.url("profile/"+user._id);
                    }
                });
        }
    }
})();