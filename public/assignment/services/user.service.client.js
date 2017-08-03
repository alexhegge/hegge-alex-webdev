/**
 * Created by Alex on 7/23/17.
 */
(function () {
    angular
        .module("WebAppMaker")
        .factory("userService", userService);

    function userService($http) {
        var api = {
            "createUser": createUser,
            "findUserById": findUserById,
            "findUserByUsername": findUserByUsername,
            "findUserByCredentials": findUserByCredentials,
            "updateUser": updateUser,
            "deleteUser": deleteUser
        };
        return api;



        function createUser(user) {
            var url = "/api/assingment/user";

            return $http.post(url, user);
        }

        function findUserById(userId)  {
            return $http.get("/api/assignment/user/"+userId);
        }

        function findUserByUsername(username) {
            var url = "/api/assignment/user?username="+username;
            return $http.get(url)
                .then(function (response) {
                return response.data;
            });
        }

        function findUserByCredentials(username, password) {
            var url = "/api/assignment/user?username="+username+"&password="+password;
            // /user?username=alice&password=alice

            return $http.get(url);
            /*
                .then(function (response) {
                    return response.data;
                });
                */
        }

        function updateUser(userId, user) {

            var url = "/api/assignment/user/" + userId;

            return $http.put(url, user);
        }

        function deleteUser(userId) {
            return $http.delete("/api/assignment/user/" + userId);
        }


    }
})();
