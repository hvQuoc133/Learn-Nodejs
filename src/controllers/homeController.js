const connection = require('../config/database');

const getHomepage = (req, res) => {
    return res.render('home.ejs');
}

const getHelloNodejs = (req, res) => {
    res.render('sample.ejs');
}

const postCreateUser = (req, res) => {
    console.log(req.body);
    res.send('Create a new user');
}


module.exports = {
    getHomepage, getHelloNodejs, postCreateUser
}