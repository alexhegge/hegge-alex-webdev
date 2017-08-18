(function () {

    angular
        .module("BeerWebsiteMaker")
        .controller("LoginController", LoginController);

    function LoginController($location, userService, $rootScope) {
        var model = this;

        model.login = function(user){
            userService.findUserByCredentials(user.username, user.password)

                .then(function (response) {
                    user = response.data;
                    if(user === null) {
                        model.errorMessage = "User not found";
                    } else {
                        //$rootScope.currentUser = user;
                        $location.url("user/"+user._id);
                    }
                });
        }
    }
})();