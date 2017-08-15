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

userModel.addPosition = addPosition;
userModel.removePosition = removePosition;

module.exports = userModel;

function removeWebsite(developerId, websiteId) {
    return userModel
        .findById(developerId)
        .then(function (user) {
            var index = user.websites.indexOf(websiteId);
            user.websites.splice(index, 1);
            return user.save();
        })
}

function addWebsite(developerId, websiteId) {
    return userModel
        .findById(developerId)
        .then(function (user) {
            user.websites.push(websiteId);
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



