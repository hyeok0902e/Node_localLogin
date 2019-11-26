const express = require('express');

const router = express.Router();
const { User } = require('../models');

router.get('/', async (req, res, next) => {
    try {
        const users = User.findAll();
        console.log(users);

        res.render('index');
    } catch (err) {
        console.log(err);
    }
});

router.get('/signup', async (req, res, next) => {
    try {
        res.render('user/signup', { signupErrorMsg: req.flash('signupErrorMsg') });
    } catch(err) {
        console.log(err);
    }
});

router.post('/signup', async (req, res, next) => {
    try {
        const { 
            email, nickname, phone, addr_full, addr_detail, zipcord,
            password1, password2,
            } = req.body;
            
        if (!email || !nickname || !phone || !addr_full || !zipcord || !password1 || !password2) {
            req.flash('signupErrorMsg', 'please enter all information inside of form!');
            res.redirect('/signup');
        }
        
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;