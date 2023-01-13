const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const signupSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    phoneNumber: {
        type: Number,
        required: true,
        unique: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
});

signupSchema.pre("save", async function (next) {

    if (this.isModified("password")) {

        this.password = await bcrypt.hash(this.password, 10);
    }

    next();
})

module.exports = mongoose.model('Signup', signupSchema);