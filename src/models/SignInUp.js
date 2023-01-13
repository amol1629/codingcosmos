const mongoose = require('mongoose');

// Creating the Schema for MongoDB Database : 
const signinup = new mongoose.Schema({
    flinks: [
        {
            label: String,
            url: String
        }
    ]
});

module.exports = mongoose.model("SIGNINUP", signinup);
