var mongoose = require("mongoose");
var userSchema = require("./user.schema.server");
var userModel = mongoose.model("UserModel", userSchema);
var db = require('./database');

userModel.createUser = createUser;
userModel.findUserById = findUserById;
userModel.updateUser = updateUser;
userModel.findUserByUsername = findUserByUsername;
userModel.findUserByCredentials = findUserByCredentials;
userModel.deleteUser = deleteUser;
userModel.getAllUsers = getAllUsers;
//userModel.followUser = followUser;

userModel.addCollection = addCollection;
userModel.removeCollection = removeCollection;

userModel.addBreweryLike = addBreweryLike;
userModel.deleteBreweryLike = deleteBreweryLike;

module.exports = userModel;

function removeCollection(developerId, collectionId) {
    return userModel
        .findById(developerId)
        .then(function (user) {
            var index = user.collections.indexOf(collectionId);
            user.collections.splice(index, 1);
            return user.save();
        })
}

function addCollection(developerId, collectionId) {
    return userModel
        .findById(developerId)
        .then(function (user) {
            user.collections.push(collectionId);
            return user.save();
        });
}

function createUser(user) {
    return userModel.create(user);
}

function findUserById(userId) {
    return userModel
        .findById(userId)
        .populate('websites', 'name');
}

function updateUser(userId, user) {
    return userModel.update({_id: userId},
        {$set: user});
}

function findUserByUsername(username) {
    return userModel.findOne({username: username});
}

function findUserByCredentials(username, password) {
    return userModel.findOne({username: username, password: password});
}

function deleteUser(userId) {
    return userModel.remove({_id: userId});
}


function getAllUsers() {
    return userModel.find();
}

function addBreweryLike(userId, brewery) {
    return userModel
        .findUserById(userId)
        .then(function (user) {
            user.breweries.push(brewery);
            return user.save();
        })
}

function deleteBreweryLike(userId, breweryId) {
    return userModel
        .findUserById(userId)
        .then(function (user) {
            var index = user.breweries.indexOf(breweryId);
            user.breweries.splice(index);
            return user.save();
        })
}



