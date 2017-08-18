var mongoose = require("mongoose");

var userSchema = mongoose.Schema({
    username: String,
    password: String,
    //roles: [{type: String, enum:["ADMIN", "STUDENT", "FACULTY"]}],
    //currentRole: String,
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    collections: [{type: mongoose.Schema.Types.ObjectId, ref:"CollectionModel"}],
    isAdmin: Boolean,
    dateCreated:  {type: Date, default: Date.now}
}, {collection: "userProject"});
module.exports = userSchema;