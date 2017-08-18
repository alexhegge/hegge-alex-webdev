var mongoose = require("mongoose");
var collectionSchema = require("./collection.schema.server");
var collectionModel = mongoose.model("CollectionModel", collectionSchema);
var userModel = require("./user.model.server");
var db = require('./database');

collectionModel.createCollection = createCollection;
collectionModel.findCollectionsByUser = findCollectionsByUser;
collectionModel.findCollectionById = findCollectionById;
collectionModel.deleteCollection = deleteCollection;
collectionModel.updateCollection = updateCollection;

collectionModel.addPage = addPage;
collectionModel.deletePage = deletePage;

module.exports = collectionModel;

function createCollection(developerId, collection) {
    collection.developer = developerId;
    var collectionTmp = null;
    return collectionModel
        .create(collection)
        .then(function (collectionDoc) {
            collectionTmp = collectionDoc;
            return userModel.addCollection(developerId, collectionDoc._id)
        })
        .then(function (userDoc) {
            return collectionTmp;
        })
}

function findCollectionsByUser(userId) {

    return collectionModel.find({developer: userId});
}

function findCollectionById(collectionId) {
    return collectionModel.findById(collectionId);
}

function updateCollection(collectionId, collection) {
    return collectionModel.update({_id: collectionId},
        {$set: collection});
}

function deleteCollection(developerId, collectionId) {
    return collectionModel
        .remove({_id: collectionId})
        .then(function (status) {
            return userModel.removeCollection(developerId, collectionId)
        });
}

function deletePage(collectionId, pageId) {
    return collectionModel
        .findById(collectionId)
        .then(function (collection) {
            var index = collection.pages.indexOf(pageId);
            collection.pages.splice(index, 1);
            return collection.save();
        })
}

function addPage(collectionId, pageId) {
    return collectionModel
        .findById(collectionId)
        .then(function (collection) {
            collection.pages.push(pageId);
            return collection.save();
        });
}




