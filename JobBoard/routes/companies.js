//crud companies

//connect db
const connection = require("../connection");

//use route
const express = require("express");
const router = express.Router();

//get all companies
router.get("/companies", (request, response) => {
    connection.query('SELECT * FROM companies;', (err, rows, fields) => {
        if (!err)
            response.send(rows);
        else
            console.log(err);
    });
});

//get companies by id
router.get('/companies/:id', (request, response) => {
    connection.query('SELECT * FROM companies WHERE id = ?;', [request.params.id], (err, rows, fields) => {
        if (!err)
            response.send(rows);
        else
            console.log(err);
    })
})

//edit companies
router.put("/companies/:id", (request, response) => {
    connection.query('UPDATE companies SET title = "titleW", contractType = "contractTypeW", city = "cityW", salary = "salaryW", description = "descriptionW", publicationDate = "2020-05-05", companieId = 1 WHERE id = ?;', (err, rows, fields) => {
        if (!err)
            response.send("Update successfully.");
        else
            console.log(err);
    });
});

//delete companies
router.delete("/companies/:id", (request, response) => {
    connection.query('DELETE FROM companies WHERE id = ?;', [request.params.id], (err, rows, fields) => {
        if (!err)
            response.send("Deleted successfully.");
        else
            console.log(err);
    });
});

//create companies
router.post('/companies/:id', (request, response) => {
    connection.query('INSERT INTO companies (adId, name, email, message) VALUES (' + request.params.id + ', "' + request.body.name + '", "' + request.body.email + '", "' + request.body.message + '");', (err, rows, fields) => {
        if (!err)
            response.send(rows);
        else
            console.log(err);
    });
});

module.exports = router;
