const mongoose = require('mongoose');

const services = new mongoose.Schema({
    serviceImage: String,
    serviceTitle: String,
    serviceInfo: String,
    serviceBtnFirstText: String,
    serviceBtnFirstUrl: String,
    serviceBtnSecondText: String,
    serviceBtnSecondUrl: String
});

module.exports = mongoose.model("services", services);
