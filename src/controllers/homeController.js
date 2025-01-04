const connection = require('../config/database');

const getHomepage = (req, res) => {
    return res.render('home.ejs');
}

const getHelloNodejs = (req, res) => {
    res.render('sample.ejs');
}

const postCreateUser = (req, res) => {

    let { email, name, city } = req.body;

    connection.query(
        'INSERT INTO Users (email, name, city) VALUES (?, ?, ?)',
        [email, name, city],
        (error, results) => {
            res.send('Create user successfully');

        });
}


module.exports = {
    getHomepage, getHelloNodejs, postCreateUser
}