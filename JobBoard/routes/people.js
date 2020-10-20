//crud people

//connect db
const connection = require("../connection");

//use route
const express = require("express");
const router = express.Router();

//get all people
router.get("/people", (request, response) => {
    connection.query('SELECT * FROM people;', (err, rows, fields) => {
        if (!err)
            response.send(rows);
        else
            console.log(err);
    });
});

//get people by id
router.get('/people/:id', (request, response) => {
    connection.query('SELECT * FROM people WHERE id = ?;', [request.params.id], (err, rows, fields) => {
        if (!err)
            response.send(rows);
        else
            console.log(err);
    })
})

//edit people
router.put("/people/:id", (request, response) => {
    connection.query('UPDATE people SET title = "titleW", contractType = "contractTypeW", city = "cityW", salary = "salaryW", description = "descriptionW", publicationDate = "2020-05-05", companieId = 1 WHERE id = ?;', (err, rows, fields) => {
        if (!err)
            response.send("Update successfully.");
        else
            console.log(err);
    });
});

//delete people
router.delete("/people/:id", (request, response) => {
    connection.query('DELETE FROM people WHERE id = ?;', [request.params.id], (err, rows, fields) => {
        if (!err)
            response.send("Deleted successfully.");
        else
            console.log(err);
    });
});

//create people
router.post('/people/:id', (request, response) => {
    connection.query('INSERT INTO people (adId, name, email, message) VALUES (' + request.params.id + ', "' + request.body.name + '", "' + request.body.email + '", "' + request.body.message + '");', (err, rows, fields) => {
        if (!err)
            response.send(rows);
        else
            console.log(err);
    });
});

//deleteUser by id
router.post('/deletepeople/:id', (request, response) => {
    connection.query('DELETE FROM people WHERE id = ?;', [request.params.id], (err, rows, fields) => {
        if (!err)
            response.redirect("/admin");
        else
            console.log(err);
    });
});

//Make user Admin
router.post('/makeAdmin/:id', (request, response) => {
    connection.query('UPDATE people SET admin = 1 WHERE id = ?;', [request.params.id], (err, rows, fields) => {
        if (!err)
            response.redirect("/admin");
        else
            console.log(err);
    });
});

//edit ad
router.post("/editad/:id", (request, response) => {
    connection.query('UPDATE ad SET title = "' + request.body.title + '", contractType = "' + request.body.contractType + '", city = "' + request.body.city + '", salary = "' + request.body.salary + '", description = "' + request.body.description + '", publicationDate = "' + today + '", companieId = 0 WHERE id = ' + request.params.id + ';', (err, rows, fields) => {
        if (!err)
            response.redirect('/admin');
        else
            console.log(err);
    });
});
//profile
router.post('/profile/:id', async (request, response) => {
    connection.query('UPDATE people SET email = "' + request.body.email + '", name = "' + request.body.name + '", phone = "' + request.body.phone + ';', (err, rows, fields) => {
        if (!err)
            response.redirect('/profile');
        else
            console.log(err);
    });

});

module.exports = router;
