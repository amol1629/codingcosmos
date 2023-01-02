const moongose = require('mongoose');

const banner1 = new moongose.Schema({
    banner1Image: String,
    banner1Title: String,
    banner1Info1: String,
    banner1VisionLine: String,
    banner1Info2: String
});

module.exports = moongose.model("banner1", banner1);
