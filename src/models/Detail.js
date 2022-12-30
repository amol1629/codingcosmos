const mongoose = require('mongoose');

// Creating the Schema for MongoDB Database : 
const detail = new mongoose.Schema({
    brandName: String,
    brandIconUrl: String,
    links: [
        {
            label: String,
            url: String
        }
    ]
});

module.exports = mongoose.model("details", detail);
