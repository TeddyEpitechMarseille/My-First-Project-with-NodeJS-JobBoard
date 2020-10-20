//auth
//connect db
const connection = require("../connection");

//use route
const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const saltRounds = 10;

var session = require('express-session');
//const fileStore = require('session-file-store')(session)
router.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 60000
    },
    // store: new fileStore()
}))

//login
router.post('/auth', async (request, response) => {
    var email = request.body.email;
    var password = request.body.password;

    if (email && password) {
        connection.query('SELECT * FROM people WHERE email = ?', [email], (error, results, fields) => {

            if (results.length > 0) {
                bcrypt.compare(password, results[0].password).then(function (result) {
                    if (result == true) {
                        user = results[0].id;
                        request.session.id = user;
                        var admin = results[0].admin;
                        request.session.loggedin = true;
                        request.session.email = email;
                        if (admin == true && request.session.loggedin == true)
                            response.redirect('/admin');
                        else
                            response.redirect('/index');
                        response.end();
                    } else
                        response.send('Incorrect Username and/or Password!');
                })

            } else {
                response.send('Incorrect Username and/or Password!');
            }
        });


    } else {
        response.send('Please enter Username and Password!');
        response.end();
    }
});

//register
router.post('/register', async (request, response) => {
    var email = request.body.email;
    var password = request.body.password;
    var passwordConfirm = request.body.passwordConfirm;
    var name = request.body.name;
    if (email && password && name) {
        if (password == passwordConfirm)
            bcrypt.hash(password, saltRounds, function (err, hash) {
                connection.query('INSERT INTO people (email, password, name, phone) VALUES ("' + email + '", "' + hash + '", "' + request.body.name + '", "' + request.body.phone + '");', (err, results, field) => {
                    if (!err) {
                        console.log(results);
                        response.redirect('/login');
                    } else {
                        response.redirect('/');
                    }
                    response.end();
                });
            });

        else
            response.send('Password different from confirm password<br> <a href="/register">Try again</a>');

    } else {
        response.send('Data incorrect or imcomplete !');
        response.end();
    }

});


module.exports = router;
