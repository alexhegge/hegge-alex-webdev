(function () {
    console.log("yoooo");
    angular
        .module("BeerWebsiteMaker")
        .controller("detailsController", detailsController);
    function detailsController($routeParams, homeService, userService, collectionService) {
        var model = this;

        model.userId = $routeParams["userId"];
        model.breweryId = $routeParams["breweryId"];

        model.goBack = goBack;
        model.addBreweryToCollection = addBreweryToCollection;

        model.like = like;
        model.unlike = unlike;

        breweryId = $routeParams.breweryId;

        console.log(breweryId);

        function init() {
            homeService.getBreweryDetails(model.breweryId)
                .then(renderBrewery);
            console.log(homeService.getBreweryDetails(breweryId));

            model.liked = false;

            userService
                .findUserById(model.userId)
                .then(function (response) {
                    model.thisUser = response.data;
                    for (var b in model.thisUser.breweries) {
                        if(model.thisUser.breweries[b] + "" === model.breweryId) {
                            model.liked = true;
                        }
                    }
                    console.log(model.liked);
                })
        }
        init();

        function renderBrewery(brewery) {
            model.brewery = brewery.data;
            console.log(model.brewery);
        }

        function goBack() {
            window.history.back();
        }

        function addBreweryToCollection(collection) {
            collectionService.addBrewery(model.userId, collection._id, model.brewery)
                .then(function (response) {
                    $location.url("/user/" + model.userId + "/collection/" + collection._id);
                });
        }

        function like() {
            userService
                .likeBrewery(model.userId, model.breweryId, model.brewery)
                .then (function(response) {
                    $route.reload();
                })

        }

        function unlike() {
            userService
                .unlikeBrewery(model.userId, model.breweryId, model.brewery)
                .then(function (response) {
                    $route.reload();
                })
        }



    }
})();