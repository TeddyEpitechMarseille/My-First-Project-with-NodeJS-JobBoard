//crud infoJobApp

//connect db
const connection = require("../connection");

//use route
const express = require("express");
const router = express.Router();

const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({
    extended: true
}));
router.use(bodyParser.json());
router.use(bodyParser.raw());

//get infoJobApp ad
router.get("/infoJobApp", (request, response) => {
    connection.query('SELECT * FROM infoJobApp;', (err, rows, fields) => {
        if (!err)
            response.send(rows);
        else
            console.log(err);
    });
});

//get infoJobApp by id
router.get('/infoJobApp/:id', (request, response) => {
    connection.query('SELECT * FROM infoJobApp WHERE id = ?;', [request.params.id], (err, rows, fields) => {
        if (!err)
            response.send(rows);
        else
            console.log(err);
    })
})

//edit infoJobApp
router.put("/infoJobApp/:id", (request, response) => {
    connection.query('UPDATE infoJobApp SET title = "titleW", contractType = "contractTypeW", city = "cityW", salary = "salaryW", description = "descriptionW", publicationDate = "2020-05-05", companieId = 1 WHERE id = ?;', (err, rows, fields) => {
        if (!err)
            response.send("Update successfully.");
        else
            console.log(err);
    });
});

//delete infoJobApp
router.delete("/infoJobApp/:id", (request, response) => {
    connection.query('DELETE FROM infoJobApp WHERE id = ?;', [request.params.id], (err, rows, fields) => {
        if (!err)
            console.log("Deleted successfully.");
        else
            console.log(err);
    });
});

//create infoJobApp
router.post('/infoJobApp/:adId', (request, response) => {
    connection.query('INSERT INTO infoJobApp (adId, name, email, message) VALUES (' + request.params.adId + ', "' + request.body.name + '", "' + request.body.email + '", "' + request.body.message + '");', (err, rows, fields) => {
        if (!err)
            response.redirect('/index.html');
        else
            console.log(err);
    });
});

module.exports = router;
