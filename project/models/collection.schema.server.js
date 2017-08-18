var mongoose = require("mongoose");
var collectionSchema = mongoose.Schema({
    name: String,
    description: String,
    developer: {type: mongoose.Schema.Types.ObjectId, ref:"UserModel"},
    beers: [{type: mongoose.Schema.Types.ObjectId, ref:"PageModel"}],
    created: {type: Date, default: Date.now}
}, {collection: "collectionProject"});
module.exports = collectionSchema;