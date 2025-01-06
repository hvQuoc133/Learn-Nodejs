const connection = require('../config/database');
const { getAllUser } = require('../services/CRUDService');

const getHomepage = async (req, res) => {
    let results = await getAllUser();
    return res.render('home.ejs', { listUsers: results });
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

const getUpdatePage = (req, res) => {
    res.render('edit.ejs');
}


module.exports = {
    getHomepage, getHelloNodejs,
    postCreateUser, getCreatePage,
    getUpdatePage
}