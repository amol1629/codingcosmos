
const { response } = require('express');
const express = require('express');
const mongodb = require('mongodb').MongoClient;
const routes = require('./routes/main');
const hbs = require('hbs');
const Detail = require('./models/Detail');
const Slider = require('./models/Slider');
const Banner1 = require('./models/Banner1');
const bodyParser = require('body-parser');
const signup = require('./models/Signup')
const mongoose = require('mongoose');
const Service = require('./models/Service');
const CoursePrice = require('./models/CoursePrice');
const SignInUp = require('./models/SignInUp');
const app = express();



// For Contact Us form data : 
app.use(bodyParser.urlencoded({
    extended: true
}))


// static folder {'public'} is configured here
app.use("/static", express.static('public'));


// routes are configured here
app.use("", routes);


// hbs{Template Engine} are configured here
app.set("view engine", "hbs");

app.set("views", "views");


// Setting partials with the help of hbs :
hbs.registerPartials("views/partials");



// Database {MongoDB} connection :
mongoose.connect("mongodb+srv://amol1629:Stark1629@cluster0.uroieye.mongodb.net/codingcosmos?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4,
}, () => {

    console.log("MongoDB Database is now connected to your application.\n");

    //  Data is inserted to MongoDB database :
    /* Detail.create({
        brandName: "King Maker",
        brandIconUrl: "/static/images/logo.jpg",
        links: [
            {
                label: "Home",
                url: "/"
            },

            {
                label: "Services",
                url: "/services"
            },

            {
                label: "About Us",
                url: "/about"
            },

            {
                label: "Contact Us",
                url: "/contact"
            },


            {
                label: "Profile",
                url: "/profile"
            },
            {
                label: 'Signout',
                url: '/signout'
            }
        ]
    }); */


    // SignInUp Page : 
    // SignInUp.create({
    //     flinks: [
    //         {
    //             label: 'SignUp',
    //             url: '/'
    //         },

    //         {
    //             label: 'SignIn',
    //             url: '/signin'
    //         },

    //         {
    //             label: 'About Us',
    //             url: '/faboutus'
    //         }
    //     ]
    // })


    // For Slider
    // Slider.create(
    //     [
    //         {
    //             title: "JavaScript",
    //             info: "JavaScript is the world's most popular programming language. JavaScript is the programming language of the Web. JavaScript is easy to learn.",
    //             sliderUrl: "/static/images/slider_js_1.jpg"
    //         },

    //         {
    //             title: "Java",
    //             info: "Java is a popular programming language. Java is used to develop mobile apps, web apps, desktop apps, games and much more.",
    //             sliderUrl: "/static/images/slider_java_2.webp"
    //         },

    //         {
    //             title: "Python",
    //             info: "Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation.",
    //             sliderUrl: "/static/images/slider_python_3.jpg"
    //         },

    //         {
    //             title: "C Language",
    //             info: "C is considered as a middle-level language because it supports the feature of both low-level and high-level languages.",
    //             sliderUrl: "/static/images/slider_c_4.jpg"
    //         },

    //         {
    //             title: "C++ Language",
    //             info: "C++ is a powerful general-purpose programming language. It can be used to develop operating systems, browsers, games, and so on.",
    //             sliderUrl: "/static/images/slider_cpp_5.jpg"
    //         },

    //         {
    //             title: "Angular JS",
    //             info: "AngularJS is a toolset for building the framework most suited to your application development. It is fully extensible and works well with other libraries.",
    //             sliderUrl: "/static/images/slider_angular_6.png"
    //         },

    //     ]
    // )


    // Slider.create([
    //     {
    //         title: "JavaScript",
    //         info: "JavaScript is the world's most popular programming language. JavaScript is the programming language of the Web. JavaScript is easy to learn.",
    //         sliderUrl: "/static/images/slider_js_1.jpg"
    //     },

    //     {
    //         title: "Java",
    //         info: "Java is a popular programming language. Java is used to develop mobile apps, web apps, desktop apps, games and much more.",
    //         sliderUrl: "/static/images/slider_java_2.webp"
    //     },

    //     {
    //         title: "Python",
    //         info: "Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation.",
    //         sliderUrl: "/static/images/slider_python_3.jpg"
    //     },

    //     {
    //         title: "C Language",
    //         info: "C is considered as a middle-level language because it supports the feature of both low-level and high-level languages.",
    //         sliderUrl: "/static/images/slider_c_4.jpg"
    //     },

    //     {
    //         title: "C++ Language",
    //         info: "C++ is a powerful general-purpose programming language. It can be used to develop operating systems, browsers, games, and so on.",
    //         sliderUrl: "/static/images/slider_cpp_5.jpg"
    //     },

    //     {
    //         title: "Angular JS",
    //         info: "AngularJS is a toolset for building the framework most suited to your application development. It is fully extensible and works well with other libraries.",
    //         sliderUrl: "/static/images/slider_angular_6.png"
    //     }


    // ])


    // For Banner1
    // Banner1.create({
    //     banner1Image: 'static/images/logo.jpg',
    //     banner1Title: 'Amol Rathod',
    //     banner1Info1: 'Coding Cosmos is website where you can get all programming courses at affordable price and boost your career in various technologies. Our mission is "Educating people of every workplace"',
    //     banner1VisionLine: '"Be educated so that you can change the world."',
    //     banner1Info2: 'We have designed all the courses in such a way that it will be an enjoyable experience of learning to everyone.'
    // })


    // For Services:
    // Service.create(
    //     [
    //         {
    //             serviceImage: "/static/images/card_java.jpg",
    //             serviceTitle: "Java Courses",
    //             serviceInfo: "We will provide Java courses at affordable price which includes Core Java, Advance Java and Java Frameworks.",
    //             serviceBtnFirstText: "Buy Now",
    //             serviceBtnFirstUrl: "www.btnfirst.com",
    //             serviceBtnSecondText: "Details",
    //             serviceBtnSecondUrl: "www.btnsecond.com"
    //         },

    //         {
    //             serviceImage: "/static/images/card_python.png",
    //             serviceTitle: "Python Courses",
    //             serviceInfo: "We will provide Python courses at affordable price which includes Python, Django, Flask and some Projects",
    //             serviceBtnFirstText: "Buy Now",
    //             serviceBtnFirstUrl: "www.btnfirst.com",
    //             serviceBtnSecondText: "Details",
    //             serviceBtnSecondUrl: "www.btnsecond.com"
    //         },

    //         {
    //             serviceImage: "/static/images/card_c.png",
    //             serviceTitle: "C Language Courses",
    //             serviceInfo: "We will provide C Programming courses at affordable price which includes basics of C, Advance C and some Projects",
    //             serviceBtnFirstText: "Buy Now",
    //             serviceBtnFirstUrl: "www.btnfirst.com",
    //             serviceBtnSecondText: "Details",
    //             serviceBtnSecondUrl: "www.btnsecond.com"
    //         },

    //         {
    //             serviceImage: "/static/images/card_cpp.png",
    //             serviceTitle: "C++ Language Courses",
    //             serviceInfo: "We will provide C++ Programming courses at affordable price which includes basics of C++, Advance C++ and some Projects",
    //             serviceBtnFirstText: "Buy Now",
    //             serviceBtnFirstUrl: "www.btnfirst.com",
    //             serviceBtnSecondText: "Details",
    //             serviceBtnSecondUrl: "www.btnsecond.com"
    //         },

    //         {
    //             serviceImage: "/static/images/card_angular.png",
    //             serviceTitle: "Angular Courses",
    //             serviceInfo: "We will provide complete Angular JS course from basic to Advance along with some interesting Projects",
    //             serviceBtnFirstText: "Buy Now",
    //             serviceBtnFirstUrl: "www.btnfirst.com",
    //             serviceBtnSecondText: "Details",
    //             serviceBtnSecondUrl: "www.btnsecond.com"
    //         },

    //         {
    //             serviceImage: "/static/images/card_js.png",
    //             serviceTitle: "JavaScript Courses",
    //             serviceInfo: "We will provide complete JavaScript course from basic to Advance along with its frameworks and some interesting Projects",
    //             serviceBtnFirstText: "Buy Now",
    //             serviceBtnFirstUrl: "www.btnfirst.com",
    //             serviceBtnSecondText: "Details",
    //             serviceBtnSecondUrl: "www.btnsecond.com"
    //         }


    //     ]
    // )


    // Course Name and Price :
    // CoursePrice.create([
    //     {
    //         courseName: "Java",
    //         coursePrice: "1"
    //     },

    //     {
    //         courseName: "Python",
    //         coursePrice: "2"
    //     },

    //     {
    //         courseName: "C++",
    //         coursePrice: "3"
    //     },

    //     {
    //         courseName: "Angular",
    //         coursePrice: "4"
    //     },

    //     {
    //         courseName: "C",
    //         coursePrice: "5"
    //     },

    //     {
    //         courseName: "JavaScript",
    //         coursePrice: "6"
    //     }

    // ])

});

app.listen(process.env.PORT | 4040, () => {
    console.log("\nServer has been started on port '4040'...\n");
})