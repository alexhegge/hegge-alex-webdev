
var q = require('q');
const app = require('../express.js');
const https = require('https');
//const searchQuery = require('querystring');

app.get('/api/project_server/query/position/:position', searchQuery);

var appId   = process.env.FOOTBALL_APP_ID;
var appKey  = process.env.FOOTBALL_APP_KEY;
var baseUrl = process.env.FOOTBALL_API_BASE_URL;

function searchQuery(req, res) {
    var position     = req.params.position;
    ffSearchQuery(position)
        .then(function(response){
            res.json(response);
        }, function (error) {
            res.sendStatus(404).send(error);
        });
}

function ffSearchQuery(position) {
    var deferred = q.defer();


    https.get({
        host: 'https://api.brewerydb.com/v2/?key=',
        path: '/service/players/json/rwvc4xd3qm5t/'+position+'/',
        headers: {
            "Accept": "application/json",
            "app_id": appId,
            "app_key": appKey
        }
    }, function(response) {
        var body = '';
        response.on('data', function(d) {
            body += d;
        });
        response.on('end', function() {
            try {
                body = JSON.parse(body);
                deferred.resolve(body);
            } catch(e) {
                deferred.reject({error: e});
            }
        });
    });
    return deferred.promise;
}