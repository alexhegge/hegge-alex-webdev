(function() {
    angular
        .module("BeerWebsiteMaker", ["ngRoute"])
        .config(Config);
    function Config($routeProvider, $httpProvider) {

        $httpProvider.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
        $httpProvider.defaults.headers.post['Accept'] = 'application/json, text/javascript';
        $httpProvider.defaults.headers.post['Access-Control-Max-Age'] = '1728000';

        $routeProvider
            /*
            .when("/", {
                templateUrl: "views/search/templates/search.html",
                controller: "SearchController",
                controllerAs: "model"
            })
            */
            .when("/", {
                templateUrl: "views/home/home.view.client.html",
                controller: "HomeController",
                controllerAs: "model"
            })

            .when("/login", {
                templateUrl: "views/user/templates/login.view.client.html",
                controller: "LoginController",
                controllerAs: "model"
            })
            .when("/register", {
                templateUrl: "views/user/templates/register.view.client.html",
                controller: "RegisterController",
                controllerAs: "model"
            })
            .when("/user/:userId", {
                templateUrl: "views/user/templates/profile.view.client.html",
                controller: "ProfileController",
                controllerAs: "model"
            })
            .when('/admin', {
                templateUrl: 'views/admin/templates/admin.view.html',
                controller: 'AdminController',
                controllerAs: 'model',
                resolve: {
                    adminUser: isAdmin
                }
            })
            //.otherwise({
            //    redirectTo: '/login'
            //})

            //.when("/socialNetwork/:userId/collection", {
            .when("/user/:userId/collection", {
                templateUrl: "views/collection/templates/collection-list.view.client.html",
                controller: "BeerListController",
                controllerAs: "model"
            })
/**
            .when("/user/:userId/collection/new", {
                templateUrl: "views/collection/templates/collection-new.view.client.html",
                controller: "BeerNewController",
                controllerAs: "model"
            })

*/
            .when("/user/:userId/collection/new", {
                templateUrl: "views/search/template/brewery-search.view.client.html",
                controller: "BrewerySearchController",
                controllerAs: "model"
            })

            .when("/socialNetwork/:userId/collection/new", {
                templateUrl: "views/collection/templates/collection-new.view.client.html",
                controller: "CollectionNewController",
                controllerAs: "model"
            })

            .when("/socialNetwork/:userId/collection/:collectionId", {
                templateUrl: "views/collection/templates/collection-edit.view.client.html",
                controller: "CollectionEditController",
                controllerAs: "model"
            })
            /**
            .when("/socialNetwork/:userId/search", {
                templateUrl: "views/search/templates/search.view.client.html",
                controller: "SearchController",
                controllerAs: "model"
            })
             **/
            .when("/socialNetwork/:userId/search/:breweryId", {
                templateUrl: "views/search/templates/details.view.client.html",
                controller: "DetailsController",
                controllerAs: "model"
            })
            .when("/socialNetwork", {
                templateUrl: "views/user/templates/socialNetwork.view.client.html",
                controller: "SocialNetworkController",
                controllerAs: "model"
            })
            .when("/socialNetwork/:userId", {
                templateUrl: "views/user/templates/socialNetwork-profile.view.client.html",
                controller: "SocialNetworkProfileController",
                controllerAs: "model"
            });

        function isAdmin($q, userService, $location) {
            var deferred = $q.defer();
            userService
                .isAdmin()
                .then(function (user) {
                    if(user == '0') {
                        deferred.reject();
                        $location.url('/profile')
                    } else {
                        deferred.resolve(user);
                    }
                });
            return deferred.promise;
        }


    }
})();