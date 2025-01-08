const express = require('express');
const { getHomepage, getHelloNodejs,
    postCreateUser, getCreatePage, getUpdatePage,
    postUpdateUser, postDeleteUser, postHandleDeleteUser
} = require('../controllers/homeController');
const router = express.Router();

//router.method('/route', handler)
router.get('/', getHomepage);
router.get('/helloNodejs', getHelloNodejs);

router.get('/create', getCreatePage);
router.get('/update/:id', getUpdatePage);

router.post('/create-user', postCreateUser);
router.post('/update-user', postUpdateUser);
router.post('/delete-user/:id', postDeleteUser);
router.post('/delete-user', postHandleDeleteUser);

module.exports = router;
