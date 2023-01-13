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
const SignInUp = require('../models/SignInUp');
const bcrypt = require('bcryptjs');

// For sending email notifications
const nodemailer = require('nodemailer')

// For sending messages notifications : 
// const accountSid = "AC95c05e211f2b4e3a8b4b5be9b9e930a4";
// const authToken = "137c8209b6ca54f2f98b671d0de48e1e";
// const client = require("twilio")(accountSid, authToken);


routes.get("/home", async (request, response) => {

    const details = await Detail.findOne({ "_id": "63beceb22dd9b9698740163e" });

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
    const details = await Detail.findOne({ "_id": "63beceb22dd9b9698740163e" });

    const services = await Service.find();

    const courseprice = await CoursePrice.findOne();


    response.render("services", {
        details: details,
        services: services,
        courseprice: courseprice

    });
});


routes.get("/contact", async (request, response) => {
    const details = await Detail.findOne({ "_id": "63beceb22dd9b9698740163e" });

    response.render("contact", {
        details: details
    });
});


routes.get("/about", async (request, response) => {
    const details = await Detail.findOne({ "_id": "63beceb22dd9b9698740163e" });

    response.render("about", {
        details: details
    });
})


routes.get("/signout", async (request, response) => {
    const details = await Detail.findOne({ "_id": "63beceb22dd9b9698740163e" });

    response.render("/", {
        details: details
    });
})


routes.get("/profile", async (request, response) => {
    const details = await Detail.findOne({ "_id": "63beceb22dd9b9698740163e" });

    response.render("profile", {
        details: details
    });
})






// SignUp {Home Page}:

routes.get("/", async (req, response) => {
    const signinup = await SignInUp.findOne({ "_id": "63bc1cd85e84cb3ab8e3a74b" });

    // console.log(signinup);

    response.render("signup", {
        signinup: signinup
    });
})

routes.get("/signin", async (req, response) => {
    const signinup = await SignInUp.findOne({ "_id": "63bc1cd85e84cb3ab8e3a74b" });


    response.render("signin", {
        signinup: signinup
    });
})

routes.get("/faboutus", async (req, response) => {
    const signinup = await SignInUp.findOne({ "_id": "63bc1cd85e84cb3ab8e3a74b" });


    response.render("faboutus", {
        signinup: signinup
    });
})



// Fetch the data from Contact Us form : 
routes.post("/user-contact-form", async (req, res) => {
    console.log("Form is submitted");

    try {
        const contactUsData = await Contact.create(req.body)

        // Feedback mail sending : 
        const sendMailTo = req.body.userEmail;
        const receiverName = req.body.userName;

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'amol1629rathod@gmail.com',
                pass: 'mczoorjhoamtzxpu'
            }
        });

        let mailOptions = {
            from: 'amol1629rathod@gmail.com',
            to: sendMailTo,
            subject: 'Feedback Received',
            text: `
            Hi ${receiverName},

            We appreciate you taking the time to give us feedback. Your feedback helps us continue to make our products even better. Your response is invaluable to us, and we wanted to let you know how important your thoughts are to the team at "Coding Cosmos".
            
            If you ever have any questions or want to share more, feel free to contact us at amol1629rathod@gmail.com. We’re always happy to hear from you!‍

            Thank you for your time and your valuable feedback!

            Regards,
            The Coding Cosmos team`,


        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('\nFeedback confirmation mail is sent to : ' + sendMailTo);
            }
        });

        // console.log(contactUsData);

        res.redirect("/home");
    } catch (error) {
        console.log("An error has been occured while fetching the data from Contact Us form");
        console.log(error);
    }
})


// Signup :
routes.post("/logup", async (req, res) => {

    try {

        const uemail = req.body.email;
        const phone = req.body.phoneNumber;

        console.log(phone);

        const newUser = new Signup({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            phoneNumber: req.body.phoneNumber
        })

        const registered = await newUser.save();

        console.log(`Registration with ${req.body.email} is successful..\n`);


        // Seding registration confirmation on mobile number :

        /*  const accountSid = "AC95c05e211f2b4e3a8b4b5be9b9e930a4";
         const authToken = "137c8209b6ca54f2f98b671d0de48e1e";
         const client = require("twilio")(accountSid, authToken);
 
         client.messages
             .create({
                 body: "Hello from Twilio", from: "+15109837566",
                 to: `+91${phone}`
             })
             .then(message => console.log(message.sid)); */


        // Sending email confirmation : 
        const sendMailTo = req.body.email;
        const receiverName = req.body.name;

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'amol1629rathod@gmail.com',
                pass: 'mczoorjhoamtzxpu'
            }
        });

        let mailOptions = {
            from: 'amol1629rathod@gmail.com',
            to: sendMailTo,
            subject: 'Thank you for completing registration',
            text: `
                Dear ${receiverName},
                
                Thank you for completing your registration with Coding Cosmos.
                
                This email serves as a confirmation that your account is activated and that you are officially a part of the Coding Cosmos family.
                Enjoy!
                
                Regards,
                The Coding Cosmos team`,


        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('\nEmail sent to : ' + uemail);
            }
        });


        res.redirect('/signin');



    } catch (error) {
        res.status(400).send(`${req.body.email} is already registered.`);
    }

})



// Sign in :

routes.post("/signin", async (req, res) => {

    try {

        const uemail = req.body.email;
        const upassword = req.body.password;

        const userEmail = await Signup.findOne({ email: uemail })

        const passMatching = await bcrypt.compare(upassword, userEmail.password);

        if (passMatching) {
            console.log("\nWelcome back,", userEmail.name);



            res.redirect('/home')

        } else {
            res.status(400).send("Invalid password");

        }

    } catch (error) {
        res.status(400).send("Invalid email");
    }



})

module.exports = routes;