const { Schema, model } = require("mongoose");

const BBSchema = new Schema({
    name:  String,
    img: String,
    nickname: String,
});

const BBModel = model("character", BBSchema);

module.exports = BBModel;
