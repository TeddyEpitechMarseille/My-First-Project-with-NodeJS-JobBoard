//crud ad

//connect db
const connection = require("../connection");

//use route
const express = require("express");
const router = express.Router();

//use parser
var bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({
    extended: false
}))
router.use(bodyParser.json())

//get tody Date
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
today = mm + '-' + dd + '-' + yyyy;


//get all ad
router.get("/ad", (request, response) => {
    connection.query('SELECT * FROM ad;', (err, rows, fields) => {
        if (!err)
            response.send(rows);
        else
            console.log(err);
    });
});

//get ad by id
router.get('/ad/:id', (request, response) => {
    connection.query('SELECT * FROM ad WHERE id = ?;', [request.params.id], (err, rows, fields) => {
        if (!err)
            response.send(rows);
        else
            console.log(err);
    })
})

//edit ad
router.post("/editad/:id", (request, response) => {
    connection.query('UPDATE ad SET title = "' + request.body.title + '", contractType = "' + request.body.contractType + '", city = "' + request.body.city + '", salary = "' + request.body.salary + '", description = "' + request.body.description + '", publicationDate = "' + today + '", companieId = 0 WHERE id = ' + request.params.id + ';', (err, rows, fields) => {
        if (!err)
            response.redirect('/admin.html');
        else
            console.log(err);
    });
});

//delete ad
router.delete("/ad/:id", (request, response) => {
    connection.query('DELETE FROM ad WHERE id = ?;', [request.params.id], (err, rows, fields) => {
        if (!err) {
            connection.query('DELETE FROM infoJobApp WHERE adId = ?;', [request.params.id], (err, rows, fields) => {
                if (!err)
                    console.log("Deleted succesfully");
                else
                    console.log(err);
            });
        } else
            console.log(err);
    });
});

//create ad
router.post('/addad', (request, response) => {
    connection.query('INSERT INTO ad (title, contractType, city, salary, description, publicationDate, companieId) VALUES ("' + request.body.title + '", "' + request.body.contractType + '", "' + request.body.city + '", "' + request.body.salary + '", "' + request.body.description + '", "' + today + '", 0);', (err, rows, fields) => {
        if (!err)
            response.redirect('/admin.html');
        else
            console.log(err);
    });
});

module.exports = router;
