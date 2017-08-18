var app = require("../../express");
var collectionModel = require("../models/collection.model.server");


app.get("/api/project/user/:userId/collection", findCollectionsByUser);
app.get("/api/project/user/:collectionId", findCollectionById);
app.put("/api/project/collection/:collectionId", updateCollection);
app.post("/api/project/user/:userId/collection", createCollection);
app.delete("/api/project/collection/:collectionId", deleteCollection);

var websites = [
    { "_id": "123", "name": "Facebook",    "developerId": "456", "description": "Lorem" },
    { "_id": "234", "name": "Tweeter",     "developerId": "456", "description": "Lorem" },
    { "_id": "456", "name": "Gizmodo",     "developerId": "456", "description": "Lorem" },
    { "_id": "890", "name": "Go",          "developerId": "123", "description": "Lorem" },
    { "_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem" },
    { "_id": "678", "name": "Checkers",    "developerId": "123", "description": "Lorem" },
    { "_id": "789", "name": "Chess",       "developerId": "234", "description": "Lorem" }
];

function createCollection(req, res) {
    var collection = req.body;
    var userId = req.params.userId;
    collectionModel
        .createCollection(userId, collection)
        .then(function (collectionDoc) {
            res.json(collectionDoc);
        }, function (err) {
            res.statusCode(500).send(err);
        })
    // website.developerId = userId;
    // website._id = (new Date()).getTime() + "";
    //
    // websites.push(website);
    // res.json(website);
}

function findCollectionById(req, res) {

    collectionModel
        .findCollectionById(req.params.collectionId)
        .then(function (collectionDoc) {
            res.json(collectionDoc);
        }, function (err) {
            res.sendStatus(404).send(err);
        });

    // for(var w in websites) {
    //     if(websites[w]._id === req.params.websiteId) {
    //         res.json(websites[w]);
    //     }
    // }
}

function findCollectionsByUser(req, res) {
    var userId = req.params.userId;

    console.log(userId);
    collectionModel
        .findCollectionsByUser(userId)
        .then(function (collections) {
            res.json(collections);
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

function updateCollection(req, res) {
    var collectionId = req.params.collectionId;
    var collection = req.body;

    collectionModel
        .updateCollection(collectionId, collection)
        .then(function (status) {
            res.json(status);
        }, function (err) {
            res.sendStatus(404).send(err);
        });
}

function deleteCollection(req, res){
    var collectionId = req.params.collectionId;
    var developerId = req.params.userId;
    collectionModel
        .deleteCollection(developerId, collectionId)
        .then(function (status) {
            res.json(status);
        });
}