
const getHomepage = (req, res) => {
    //process data
    //call model
    res.send('Hello World! & Nodemon');
}

const getHelloNodejs = (req, res) => {
    res.render('sample.ejs');
}

module.exports = {
    getHomepage, getHelloNodejs
}