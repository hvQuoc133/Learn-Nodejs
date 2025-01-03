const express = require('express');
const {getHomepage, getHelloNodejs, postCreateUser} = require('../controllers/homeController');
const router = express.Router();

//router.method('/route', handler)
router.get('/', getHomepage);
router.get('/helloNodejs', getHelloNodejs);
router.post('/create-user', postCreateUser);

module.exports = router;
