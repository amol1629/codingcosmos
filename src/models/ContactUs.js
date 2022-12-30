const mongoose = require('mongoose');

const contact = new mongoose.Schema({
    userName: String,
    userEmail: String,
    userPhone: String,
    userFeedback: String
});

module.exports = mongoose.model("contactus", contact);