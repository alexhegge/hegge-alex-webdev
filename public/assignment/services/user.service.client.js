/**
 * Created by Alex on 7/23/17.
 */
(function () {
    angular
        .module("WebAppMaker")
        .factory("userService", userService);

    function userService($http) {


        var users = [
            {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder", isAdmin: true  },
            {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
            {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
            {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
        ];

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
            var url = "/api/assignment/user";


            console.log(user);
            return $http.post(url, user)
                .then(function (response) {
                    return response.data;
                })

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
            var url = "/api/assignment/user/" + userId;
            return $http.delete(url)
                .then(function (response) {
                    return response.data;
                });
        }


    }
})();
