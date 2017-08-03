(function () {
    angular
        .module("WebAppMaker")
        .controller("RegisterController", RegisterController);

    function RegisterController(userService, $location) {
        var model = this;

        model.createUser = createUser;

        function init() {

        }

        init();

        function createUser(user) {
            userService.findUserByUsername(user.username)
                .then(function (response) {
                    var responseuser = response.data;
                    if (responseuser === "0") {
                        return userService.createUser(user)
                            .then(function(response){
                                user = response.data;
                                $location.url("/user/" + user._id);
                                return;
                            });
                    } else {
                        model.errorMessage = "username already exist";
                    }
                    return;
                })
        }
    }
})();