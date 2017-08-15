var mongoose = require("mongoose");
var widgetSchema = mongoose.Schema({
    name: String,
    type: {type: String, enum: ['HEADING, IMAGE, YOUTUBE, HTML, INPUT']},
    text: String,
    placeholder: String,
    description: String,
    pageId: {type: mongoose.Schema.Types.ObjectId, ref:"WebsiteModel"},
    url: String,
    width: String,
    height: String,
    rows: Number,
    size: Number,
    class: String,
    icon: String,
    deletable: Boolean,
    formatted: Boolean,
    dateCreated: {type: Date, default: Date.now}
}, {collection: "page"});
module.exports = widgetSchema;