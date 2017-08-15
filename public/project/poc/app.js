(function () {
    angular
        .module('FFApp', [])
        .controller('ffController', ffController);

    function ffController($http) {
        var model = this;
        model.searchPosition = searchPosition;
        //model.searchDetails = searchDetails;
/**
        function searchDetails(imdbID) {
            var url = "http://www.omdbapi.com/?apikey=852159f0&i=" + imdbID;
            $http.get(url)
                .then(function (response) {
                    model.movie = response.data;
                });
        }
**/
        function searchPosition(position) {
            var url = "https://www.fantasyfootballnerd.com/service/players/json/test/" + position + "/";
            //url.headers = {
            //    access-control-allow-origin
            //}

            //res.header("Access-Control-Allow-Origin", "*");
            //res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            $http.get(url)
                .then(function (response) {
                    res.header("Access-Control-Allow-Origin", "*");
                    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

                    //model.players = response.data.Search;
                    console.log(response);
                });
        }
    }
})();