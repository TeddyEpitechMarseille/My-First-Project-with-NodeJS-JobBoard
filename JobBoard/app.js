//main server

//database link
const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config({
    path: './.env'
})
const connection = require("./connection");

//structure
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');


//link front
const path = require('path');

//cookie
const cookieParser = require('cookie-parser');

//link public contains img css and js

//Routes Defines
app.use('/', require('./routes/ad'));
app.use('/', require('./routes/companies'));
app.use('/', require('./routes/infoJobApp'));
app.use('/', require('./routes/people'));
app.use('/', require('./routes/auth'));

//get data
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());

//display views without extension
app.use(express.static(__dirname + '/views', {
    extensions: ['html']
}));

app.get('/admin', function (request, response) {
    if (request.session.loggedin == true) {
        response.render("admin");
    } else {
        response.redirect('/')
    }
    response.end();
});



app.listen(3000, () => {
    console.log("Server started on port 3000 !");
})
