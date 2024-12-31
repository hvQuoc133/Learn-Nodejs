const express = require('express');
const {getHomepage, getHelloNodejs} = require('../controllers/homeController');
const router = express.Router();

//router.method('/route', handler)
router.get('/', getHomepage);
router.get('/helloNodejs', getHelloNodejs);

module.exports = router;
