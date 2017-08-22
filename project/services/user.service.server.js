/**
 * Created by Alex on 7/31/17.
 */
var app = require("../../express");
var userModel = require("../models/user.model.server");


var users = [
    {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder", isAdmin: true  },
    {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
    {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
    {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
];



// http handlers
app.get("/api/project/users", getAllUsers);
app.get("/api/project/user", findUser);
app.get("/api/project/user/:userId", findUserById);
app.post("/api/project/user", createUser);
app.put("/api/project/user/:userId", updateUser);
app.delete("/api/project/user/:userId", deleteUser);
app.put("/api/project/user/:userId/brewery/:breweryId/like", likeBrewery);
app.put("/api/project/user/:userId/brewery/:breweryId/unlike", unlikeBrewery);

function getAllUsers(req, response) {
    userModel
        .getAllUsers
        .then(function (users) {
            response.send(users);
        });
}

function updateUser(req, res) {
    var userId = req.params.userId;
    var user = req.body;

    console.log("we made it here");

    userModel
        .updateUser(userId, user)
        .then(function (status) {
            res.json(status);
        }, function (err) {
            res.sendStatus(404).send(err);
        });
}


function createUser(req, res) {
    var user = req.body;

    console.log("were in server create user");

    userModel
        .createUser(user)
        .then(function (user) {
            res.json(user);
        })
}

function findUser(req, res) {
    var username = req.query.username;
    var password = req.query.password;
    console.log([username, password]);


    if(username && password) {
        userModel
            .findUserByCredentials(username, password)
            .then(function (user) {
                res.json(user);
                return;
            }, function (err) {
                res.sendStatus(404).send(err);
                return;
            })
        return;
    } else if(username) {
        for(var u in users) {
            if(users[u].username === username) {
                res.send(users[u]);
                return;
            }
        }
    }
    res.send("0");
}

function findUserById(req, response) {
    var userId = req.params['userId'];

    userModel
        .findUserById(userId)
        .then(function (user) {
            response.json(user);
        });
    // for(var u in users) {
    //     if(users[u]._id === req.params.userId) {
    //         response.send(users[u]);
    //         return;
    //     }
    // }
    // response.sendStatus(404)
}

function deleteUser(req, response) {
    var userId = req.params.userId;

    userModel
        .deleteUser(userId)
        .then(function (status) {
            response.sendStatus(200);
        });
}

function likeBrewery(req, res) {

    var userId = req.params.userId;
    var breweryId = req.params.breweryId;

    userModel
        .addBreweryLike(userId, breweryId)
        .then(function (status) {
            res.json(status);
        }, function (err) {
            res.status(500).send(err);
        })
}


function unlikeBrewery(req, res) {
    var userId = req.params.userId;
    var breweryId = req.params.breweryId;



    userModel
        .deleteBreweryLike(userId, breweryId)
        .then(function (status) {
            res.json(status);
        }, function (err) {
            res.status(500).send(err);
        })


}