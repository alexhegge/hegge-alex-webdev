var mongoose = require("mongoose");
var collectionSchema = mongoose.Schema({
    name: String,
    description: String,
    developer: {type: mongoose.Schema.Types.ObjectId, ref:"UserModel"},
    breweries: [{name: String, breweryId: String}],
    created: {type: Date, default: Date.now}
}, {collection: "collection"});
module.exports = collectionSchema;