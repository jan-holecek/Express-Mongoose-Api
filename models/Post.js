const mongoose = require("mongoose");

const schema = mongoose.Schema({
	name: String,
    title: String,
    content: String,
    createdAt: String
})

module.exports = mongoose.model("Post", schema)