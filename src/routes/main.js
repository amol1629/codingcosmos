const { response } = require('express');
const { Router } = require('express');
const express = require('express');
const Detail = require("../models/Detail");
const Slider = require('../models/Slider');
const Service = require('../models/Service');
const Contact = require('../models/ContactUs');
const Banner1 = require('../models/Banner1');
const Signup = require('../models/Signup')
const routes = express.Router();
const CoursePrice = require('../models/CoursePrice');

routes.get("/", async (request, response) => {

    const details = await Detail.findOne({ "_id": "63bba2162d4bdb3392383ef1" });

    const slides = await Slider.find();


    const services = await Service.find();

    const banner1 = await Banner1.findOne();

    const courseprice = await CoursePrice.findOne();

    response.render("index", {
        details: details,
        slides: slides,
        services: services,
        banner1: banner1,
        courseprice: courseprice
    });
});

routes.get("/services", async (request, response) => {
    const details = await Detail.findOne({ "_id": "63bba2162d4bdb3392383ef1" });

    const services = await Service.find();

    const courseprice = await CoursePrice.findOne();


    response.render("services", {
        details: details,
        services: services,
        courseprice: courseprice

    });
});


routes.get("/contact", async (request, response) => {
    const details = await Detail.findOne({ "_id": "63bba2162d4bdb3392383ef1" });

    response.render("contact", {
        details: details
    });
});


routes.get("/about", async (request, response) => {
    const details = await Detail.findOne({ "_id": "63bba2162d4bdb3392383ef1" });

    response.render("about", {
        details: details
    });
})


routes.get("/signup", async (req, response) => {
    const details = await Detail.findOne({ "_id": "63bba2162d4bdb3392383ef1" });

    response.render("signup", {
        details: details
    });
})


// Fetch the data from Contact Us form : 
routes.post("/user-contact-form", async (request, response) => {
    console.log("Form is submitted");

    try {
        const contactUsData = await Contact.create(request.body)

        console.log(contactUsData);

        response.redirect("/");
    } catch (error) {
        console.log("An error has been occured while fetching the data from Contact Us form");
        console.log(error);
    }
})


// Signup :
routes.post("/logup", async (request, response) => {
    console.log("Logup is Successfully");

    try {
        const contactUsData = await Signup.create(request.body)

        console.log(contactUsData);

        response.redirect("/");
    } catch (error) {
        console.log("An error has been occured while fetching the data from Contact Us form");
        console.log(error);
    }
})



// Signin :

routes.post("/signin", async (req, res) => {

    const sign = Signup.findOne({}, ((err, documents) => {
        const dbpassword = documents.password;
        const dbemail = documents.email;
        const pas = req.body.password;
        const em = req.body.email;


        console.log('dbpassword :', dbpassword);
        console.log('dbemail :', dbemail);
        console.log('password :', pas);
        console.log('email :', em);

        if (err) {
            return res.status(500).send('Error occurred while logging in');
        }

        if (!dbemail) {
            return res.status(401).send('Email is incorrect');

        }

        if (!(dbpassword === pas)) {
            return res.status(401).send('Password is incorrect');
        }

        console.log("Login Successfully");

        res.redirect('/services');
    }));



})

module.exports = routes;