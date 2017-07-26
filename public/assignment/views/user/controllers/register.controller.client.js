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
            var _user = userService.findUserByUsername(user.username);
            if(!_user) {
                var user = userService.createUser(user);
                $location.url("/profile/"+user._id);
            } else {
                model.error = "User already exists";
            }
        }
    }
})();