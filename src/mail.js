// const nodemailer = require('nodemailer')

// let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'amol1629rathod@gmail.com',
//         pass: 'mczoorjhoamtzxpu'
//     }
// });



// let mailOptions = {
//     from: 'amol1629rathod@gmail.com',
//     to: "makerofking18@gmail.com",
//     subject: 'Sending Email using Node.js',
//     text: `Hi Smartherd, thank you for your nice Node.js tutorials.
//               I will donate 50$ for this course. Please send me payment options.`

// };



// transporter.sendMail(mailOptions, function (error, info) {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log('Email sent: ' + info.response);
//     }
// });



// Twilio API :

// const accountSid = "AC95c05e211f2b4e3a8b4b5be9b9e930a4";
// const authToken = "137c8209b6ca54f2f98b671d0de48e1e";
// const client = require("twilio")(accountSid, authToken);

// client.messages.create({
//     body: "Hello from Twilio",
//     from: "+15109837566",
//     to: "+919657383030"
// }).then(message => console.log(message.sid));


// Vonage Server to send messages :

// const Vonage = require('@vonage/server-sdk')
// const Nexmo = require('nexmo');

// const nexmo = new Nexmo({
//     apiKey: "a87b5437",
//     apiSecret: "Y46vWLpVVhO1uWp4"
// });

// const from = "Vonage APIs";
// const to = "919657383030";
// const text = "Hi from Node JS";

// var result = nexmo.message.sendSms(from, to, text);

// console.log(result);









// Stripe Payment Gateway :

// This is your test secret API key.
// const stripe = require('stripe')('sk_test_51MPGc7SJTOcOywgj5z2m4TXtpFRrjHH66oNqHZkPUKyoWgjIEeIXCbo0Kmh55h2Xx5ueUXiPIpv5sFO4BqOfgBy600PFf65G9t');
// const express = require('express');
// const app = express();
// app.use(express.static('public'));

// const YOUR_DOMAIN = 'http://localhost:4242';

// app.get('/', (req, res) => {
//     res.send("Welcome to code")
// })

// app.post('/signin', async (req, res) => {
//     const session = await stripe.checkout.sessions.create({
//         line_items: [
//             {
//                 // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
//                 price: '{{PRICE_ID}}',
//                 quantity: 1,
//             },
//         ],
//         mode: 'payment',
//         success_url: `${YOUR_DOMAIN}/success.html`,
//         cancel_url: `${YOUR_DOMAIN}/cancel.html`,
//     });

//     res.redirect(303, session.url);
// });

// app.listen(4242, () => console.log('Running on port 4242'));