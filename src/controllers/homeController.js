const connection = require('../config/database');

const getHomepage = (req, res) => {
    return res.render('home.ejs');
}

const getHelloNodejs = (req, res) => {
    res.render('sample.ejs');
}

const postCreateUser = async (req, res) => {

    let { email, name, city } = req.body;

    let [results, fields] = await connection.execute(
        'INSERT INTO Users (email, name, city) VALUES (?, ?, ?)',
        [email, name, city]
    );
    res.send('Create user successfully');
}

const getCreatePage = (req, res) => {
    res.render('create.ejs');
}


module.exports = {
    getHomepage, getHelloNodejs,
    postCreateUser, getCreatePage
}