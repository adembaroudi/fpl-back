var mongoose = require("mongoose");
var sujetSchema = new mongoose.Schema({
    titre: String,
    description: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    choix: String,
    oui: {
        type: Number,
        default: 0
    },
    non: {
        type: Number,
        default: 0
    },
    total: {
        type: Number,
        default: 0

    }


})
module.exports = mongoose.model("sujet", sujetSchema)