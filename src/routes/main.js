const { response } = require('express');
const { Router } = require('express');
const express = require('express');
const Detail = require("../models/Detail");
const Slider = require('../models/Slider');
const Service = require('../models/Service');
const Contact = require('../models/ContactUs');
const routes = express.Router();
const notifier = require('node-notifier');

routes.get("/", async (request, response) => {

    const details = await Detail.findOne({ "_id": "63ad7656231d295862108e2a" });

    const slides = await Slider.find();

    const services = await Service.find();


    response.render("index", {
        details: details,
        slides: slides,
        services: services
    });
});

routes.get("/services", async (request, response) => {
    const details = await Detail.findOne({ "_id": "63ad7656231d295862108e2a" });

    const services = await Service.find();

    response.render("services", {
        details: details,
        services: services
    });
});


routes.get("/about", async (request, response) => {
    const details = await Detail.findOne({ "_id": "63ad7656231d295862108e2a" });

    response.render("about", {
        details: details
    });
});


routes.get("/contact", async (request, response) => {
    const details = await Detail.findOne({ "_id": "63ad7656231d295862108e2a" });

    response.render("contact", {
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


module.exports = routes;