var app = require("../../express");


app.get("/api/assignment/user/:userId/website/:websiteId/page/:pageId/widget", findWidgetsByPageId);
app.get("/api/assignment/user/:userId/website/:websiteId/page/:pageId/widget/:widgetId", findWidgetById);
app.put("/api/assignment/user/:userId/website/:websiteId/page/:pageId/widget/:widgetId", updateWidget);
app.post("/api/assignment/user/:userId/website/:websiteId/page/:pageId/widget", createWidget);
app.delete("/api/assignment/user/:userId/website/:websiteId/page/:pageId/widget/:widgetId", deleteWidget);




var widgets = [
    { "_id": "123", "widgetType": "HEADING", "pageId": "321", "size": 2, "text": "GIZMODO"},
    { "_id": "234", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
    { "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%", "url": "http://lorempixel.com/400/200/"},
    { "_id": "456", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"},
    { "_id": "567", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
    { "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%", "url": "https://youtu.be/AM2Ivdi9c4E" },
    { "_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"}
];

function createWidget(req, res) {
    var widget = req.body;
    var pageId = req.params.pageId;
    widget.pageId = pageId;
    widget._id = (new Date()).getTime() + "";

    widgets.push(widget);
    res.json(widget);
}

function findWidgetById(req, res) {
    for(var w in widgets) {
        if(widgets[w]._id === req.params.widgetId) {
            response.send(widgets[w]);
            return;
        }
    }
    res.sendStatus(404);
}

function findWidgetsByPageId(req, res) {
    var pageId = req.params.pageId;
    var widgets2 = [];

    for(var w in widgets) {
        if(widgets[w].pageId === pageId) {
            widgets2.push(widgets[w]);
        }
    }

    res.json(widgets2);
}


function updateWidget(req, res) {
    var pageId = req.params.pageId;
    var widget = req.body;

    for(var w in widgets) {
        if (widgets[w]._id === request.params.widgetId) {
            widgets[w] = widget;
            response.json(widget);
        }
    }
    res.sendStatus(404);
}

function deleteWidget(req, res){
    return null;
}

module.exports = function (app) {
    var multer = require('multer'); // npm install multer --save
    var upload = multer({ dest: __dirname+'/../../public/uploads' });

    app.post ("/api/upload", upload.single('myFile'), uploadImage);


function uploadImage(req, res) {

    var widgetId      = req.body.widgetId;
    var width         = req.body.width;
    var myFile        = req.file;

    var userId = req.body.userId;
    var websiteId = req.body.websiteId;
    var pageId = req.body.pageId;

    var originalname  = myFile.originalname; // file name on user's computer
    var filename      = myFile.filename;     // new file name in upload folder
    var path          = myFile.path;         // full path of uploaded file
    var destination   = myFile.destination;  // folder where file is saved to
    var size          = myFile.size;
    var mimetype      = myFile.mimetype;

    for (var w in widgets) {
        if (widgets[w]._id === widgetId) {
            var widget = widgets[w];
        }
    }

    widget.url = '/uploads/' + filename;

    var callbackUrl   = "/assignment/#!/user/" + userId + "/website/" + websiteId + "/page/" + pageId + "/widget/" + widgetId;

    res.redirect(callbackUrl);
}