const connection = require('../config/database');
const { get } = require('../routes/web');
const { getAllUser, getUserById, updateUserById } = require('../services/CRUDService');

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

const getUpdatePage = async (req, res) => {
    const userId = req.params.id;
    let user = await getUserById(userId);
    res.render('edit.ejs', { userEdit: user });
}

const postUpdateUser = async (req, res) => {
    let { email, name, city, userId } = req.body;
    await updateUserById(email, name, city, userId);
    // res.send('Updated user successfully');
    res.redirect('/');
}


module.exports = {
    getHomepage, getHelloNodejs,
    postCreateUser, getCreatePage,
    getUpdatePage, postUpdateUser
}