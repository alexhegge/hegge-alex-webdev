
(function () {

    angular
        .module("BeerWebsiteMaker")
        .factory("userService", userService);

    function userService($http) {


        var api = {
            "createUser": createUser,
            "findUserById": findUserById,
            "findUserByUsername": findUserByUsername,
            "findUserByCredentials": findUserByCredentials,
            "updateUser": updateUser,
            "deleteUser": deleteUser,
            //"followUser": followUser
        };
        return api;



        function createUser(user) {
            var url = "/api/project/user";

            console.log("were in clinet create user");
            console.log(user);

            return $http.post(url, user)
                .then(function (response) {
                    return response.data;
                })
        }

        function findUserById(userId)  {
            return $http.get("/api/project/user/"+userId);
        }

        function findUserByUsername(username) {
            var url = "/api/project/user?username="+username;
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                });
        }

        function findUserByCredentials(username, password) {
            var url = "/api/project/user?username="+username+"&password="+password;
            // /user?username=alice&password=alice

            return $http.get(url);
            /*
             .then(function (response) {
             return response.data;
             });
             */
        }

        function updateUser(userId, user) {

            var url = "/api/project/user/" + userId;

            console.log(user);
            return $http.put(url, user);
            console.log(user);
        }

        function deleteUser(userId) {
            var url = "/api/project/user/" + userId;
            return $http.delete(url)
                .then(function (response) {
                    return response.data;
                });
        }
/**
        function follow(userId, otherUserId) {
            var url = "/api/project/user/" + userId + "/follow/" + otherUserId;
            return $http.put(url)
        }
**/


    }
})();