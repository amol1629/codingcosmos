const mongoose = require('mongoose');

const coursePrice = new mongoose.Schema([{
    courseName: String,
    coursePrice: String
}]);

module.exports = mongoose.model("courseprice", coursePrice);
