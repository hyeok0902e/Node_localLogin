const express = require('express');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        res.render('index');
    } catch (err) {
        console.log(err);
    }
});

router.get('/signup', async (req, res, next) => {
    try {
        res.render('user/signup');
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;