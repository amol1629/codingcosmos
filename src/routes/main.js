const { response } = require('express');
const { Router } = require('express');
const express = require('express');
const Detail = require("../models/Detail");
const Slider = require('../models/Slider');
const Service = require('../models/Service');
const Contact = require('../models/ContactUs');
const Banner1 = require('../models/Banner1');
const routes = express.Router();
const CoursePrice = require('../models/CoursePrice');

routes.get("/", async (request, response) => {

    const details = await Detail.findOne({ "_id": "63b45f1c59a7e285eb2d5172" });

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
    const details = await Detail.findOne({ "_id": "63b45f1c59a7e285eb2d5172" });

    const services = await Service.find();

    const courseprice = await CoursePrice.findOne();


    response.render("services", {
        details: details,
        services: services,
        courseprice: courseprice

    });
});


routes.get("/contact", async (request, response) => {
    const details = await Detail.findOne({ "_id": "63b45f1c59a7e285eb2d5172" });

    response.render("contact", {
        details: details
    });
});


routes.get("/about", async (request, response) => {
    const details = await Detail.findOne({ "_id": "63b45f1c59a7e285eb2d5172" });

    response.render("about", {
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