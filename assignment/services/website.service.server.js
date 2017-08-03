var app = require("../../express");

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
    website.developerId = userId;
    website._id = (new Date()).getTime() + "";

    websites.push(website);
    res.json(website);
}

function findWebsiteById(req, res) {
    for(var w in websites) {
        if(websites[w]._id === req.params.websiteId) {
            res.json(websites[w]);
        }
    }
    res.sendStatus(404);
}

function findWebsitesByUser(req, res) {
    var userId = req.params.userId;

    var sites = [];

    for(var w in websites) {
        if(websites[w].developerId === userId) {
            sites.push(websites[w]);
        }
    }

    res.json(sites);
}

function updateWebsite(req, res) {
    var userId = req.params.userId;
    var website = req.body;

    for(var w in websites) {
        if(websites[w].developerId === userId) {
            websites[w] = website;
            res.send(website)
            return;
        }
    }
    res.sendStatus(404);
}

function deleteWebsite(req, res){
    return null;
}