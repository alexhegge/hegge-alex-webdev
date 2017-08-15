var mongoose = require("mongoose");
var websiteSchema = require("./position.schema.server");
var websiteModel = mongoose.model("WebsiteModel", websiteSchema);
var userModel = require("./user.model.server");
var db = require('./database');

websiteModel.createWebsite = createWebsite;
websiteModel.findWebsitesByUser = findWebsitesByUser;
websiteModel.findWebsiteById = findWebsiteById;
websiteModel.deleteWebsite = deleteWebsite;
websiteModel.updateWebsite = updateWebsite;

websiteModel.addPage = addPage;
websiteModel.deletePage = deletePage;

module.exports = websiteModel;

function createWebsite(developerId, website) {
    website.developer = developerId;
    var websiteTmp = null;
    return websiteModel
        .create(website)
        .then(function (websiteDoc) {
            websiteTmp = websiteDoc;
            return userModel.addWebsite(developerId, websiteDoc._id)
        })
        .then(function (userDoc) {
            return websiteTmp;
        })
}

function findWebsitesByUser(userId) {

    return websiteModel.find({developer: userId});
}

function findWebsiteById(websiteId) {
    return websiteModel.findById(websiteId);
}

function updateWebsite(websiteId, website) {
    return websiteModel.update({_id: websiteId},
        {$set: website});
}

function deleteWebsite(developerId, websiteId) {
    return websiteModel
        .remove({_id: websiteId})
        .then(function (status) {
            return userModel.removeWebsite(developerId, websiteId)
        });
}

function deletePage(websiteId, pageId) {
    return websiteModel
        .findById(websiteId)
        .then(function (website) {
            var index = website.pages.indexOf(pageId);
            website.pages.splice(index, 1);
            return website.save();
        })
}

function addPage(websiteId, pageId) {
    return websiteModel
        .findById(websiteId)
        .then(function (website) {
            website.pages.push(pageId);
            return website.save();
        });
}




