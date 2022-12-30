const mongoose = require('mongoose');

const slider = new mongoose.Schema({
    title: String,
    info: String,
    sliderUrl: String,
    class: String
});

module.exports = mongoose.model("sliders", slider);
