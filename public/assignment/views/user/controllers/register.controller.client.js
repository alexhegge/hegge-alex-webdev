(function () {
    angular
        .module("WebAppMaker")
        .controller("RegisterController", RegisterController);

    function RegisterController(userService, $location) {
        var model = this;

        model.createUser = createUser;

        function createUser(username, password, password2) {

            if(password !== password2) {
                model.error = "Passwords must match";
                return;
            }

            var found = null;//userService.findUserByUsername(username);

            if(found !== null) {
                model.error = "Username is not available";
            } else {
                var user = {
                    username: username,
                    password: password
                };

                console.log(user);
                // model.message = user;
                userService
                    .createUser(user)
                    .then(function (user) {
                        $location.url('/user/' + user._id);
                    });
            }
        }
    }
})();