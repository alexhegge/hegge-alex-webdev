var mongoose = require("mongoose");
var widgetSchema = require("./widget.schema.server");
var widgetModel = mongoose.model("WidgetModel", widgetSchema);
var pageModel = require("./player.model.server");

widgetModel.createWidget = createWidget;
widgetModel.findWidgetsByPageId = findWidgetsByPageId;
widgetModel.findWidgetById = findWidgetById;
widgetModel.deleteWidget = deleteWidget;
widgetModel.updateWidget = updateWidget;

module.exports = widgetModel;

function createWidget(pageId, widget) {
    widget.pageId = pageId;
    var widgetTmp = null;
    return widgetModel
        .create(widget)
        .then(function (widgetDoc) {
            pageTmp = widgetDoc;
            return pageModel.addWidget(pageId, widgetDoc._id)
        })
        .then(function (userDoc) {
            return widgetTmp;
        })
}

function findWidgetsByPageId(pageId) {
    return widgetModel
        .find({pageId: pageId});
}

function findWidgetById(widgetId) {
    return widgetModel.findById(widgetId);
}

function updateWidget(widgetId, widget) {
    return widgetModel.update({_id: widgetId},
        {$set: widget});
}

function deleteWidget(pageId, widgetId) {
    return widgetmodel
        .remove({_id: widgetId})
        .then(function (status) {
            return pageModel.deleteWidget(pageId, widgetId)
        });
}





