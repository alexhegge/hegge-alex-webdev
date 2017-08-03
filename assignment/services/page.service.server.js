/**
 * Created by Alex on 7/23/17.
 */

var app = require("../../express");

var pages = [
    { "_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem" },
    { "_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem" },
    { "_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem" }
];



app.get("/api/assignment/user/:userId/website/:websiteId/page", findPagesByWebsiteId);
app.get("/api/assignment/user/:userId/website/:websiteId/page/:pageId", findPageById);
app.put("/api/assignment/user/:userId/website/:websiteId/page/:pageId", updatePage);
app.post("/api/assignment/user/:userId/website/:websiteId/page", createPage);
app.delete("/api/assignment/user/:userId/website/:websiteId/page/:pageId", deletePage);


function createPage(req, res) {
    var page = req.body;
    var websiteId = req.params.websiteId;
    page.websiteId = websiteId;
    page._id = (new Date()).getTime() + "";

    pages.push(page);
    res.json(page);
}


function findPageById(req, res) {
    for(var p in pages) {
        if(pages[p]._id === req.params.pageId) {
            res.send(pages[p]);
            return;
        }
    }
}


function findPagesByWebsiteId(req, res) {
    var websiteId = req.params.websiteId;
    var sites = [];


    for(var p in pages) {
        if(pages[p].websiteId === websiteId) {
            sites.push(pages[p]);
        }
    }

    res.json(sites);
}

function updatePage(req, res) {
    var websiteId = req.params.websiteId;
    var page = req.body;

    for(var p in pages) {
        if(pages[p].websiteId === websiteId) {
            pages[p] = page;
            res.send(page)
            return;
        }
    }
    res.sendStatus(404);
}



function deletePage(req, res){
    return null;
}