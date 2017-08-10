var app = require("../../express");
var websiteModel = require("../models/website.model.server");


app.get("/api/assignment/user/:userId/website", findWebsitesByUser);
app.get("/api/assignment/user/:websiteId", findWebsiteById);
app.put("/api/assignment/website/:websiteId", updateWebsite);
app.post("/api/assignment/user/:userId/website", createWebsite);
app.delete("/api/assignment/website/:websiteId", deleteWebsite);

var websites = [
    { "_id": "123", "name": "Facebook",    "developerId": "456", "description": "Lorem" },
    { "_id": "234", "name": "Tweeter",     "developerId": "456", "description": "Lorem" },
    { "_id": "456", "name": "Gizmodo",     "developerId": "456", "description": "Lorem" },
    { "_id": "890", "name": "Go",          "developerId": "123", "description": "Lorem" },
    { "_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem" },
    { "_id": "678", "name": "Checkers",    "developerId": "123", "description": "Lorem" },
    { "_id": "789", "name": "Chess",       "developerId": "234", "description": "Lorem" }
];

function createWebsite(req, res) {
    var website = req.body;
    var userId = req.params.userId;
    websiteModel
        .createWebsite(userId, website)
        .then(function (websiteDoc) {
            res.json(websiteDoc);
        }, function (err) {
            res.statusCode(500).send(err);
        })
    // website.developerId = userId;
    // website._id = (new Date()).getTime() + "";
    //
    // websites.push(website);
    // res.json(website);
}

function findWebsiteById(req, res) {

    websiteModel
        .findWebsiteById(req.params.websiteId)
        .then(function (websiteDoc) {
            res.json(websiteDoc);
        }, function (err) {
            res.sendStatus(404).send(err);
        });

    // for(var w in websites) {
    //     if(websites[w]._id === req.params.websiteId) {
    //         res.json(websites[w]);
    //     }
    // }
}

function findWebsitesByUser(req, res) {
    var userId = req.params.userId;

    console.log(userId);
    websiteModel
        .findWebsitesByUser(userId)
        .then(function (websites) {
            res.json(websites);
        });

    //
    // var sites = [];
    //
    // for(var w in websites) {
    //     if(websites[w].developerId === userId) {
    //         sites.push(websites[w]);
    //     }
    // }
    //
    // res.json(sites);
}

function updateWebsite(req, res) {
    var websiteId = req.params.websiteId;
    var website = req.body;

    websiteModel
        .updateWebsite(websiteId, website)
        .then(function (status) {
            res.json(status);
        }, function (err) {
            res.sendStatus(404).send(err);
        });
}

function deleteWebsite(req, res){
    var websiteId = req.params.websiteId;
    var developerId = req.params.userId;
    websiteModel
        .deleteWebsite(developerId, websiteId)
        .then(function (status) {
            res.json(status);
        });
}