const express = require('express');
const bcrypt = require('bcrypt'); // 비밀번호 암호화

const router = express.Router();
const { User } = require('../models');

router.get('/', async (req, res, next) => {
    try {
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
            email, nickname, phone, addr_full, addr_detail, 
            zipcode, password1
            } = req.body;
        
        const user = await User.findOne({ where: { email: email } });
        if (user) {
            req.flash('signupErrorMsg', '이미 가입되어 있는 이메일 입니다.');
            res.redirect('/signup');
        }
        
        
        // password hashing (bcrypt)
        await bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(password1, salt, function(err, hash) {

                // 유저 생성
                User.create({
                    email, nickname, phone, addr_full, addr_detail, zipcode, password: hash,
                }).then((user) => {
                    res.render('index', { user })
                });
            });
        });


        

    } catch (err) {
        console.log(err);
    }
});

router.get('/signin', async (req, res, next) => {
    try {
        res.render('user/signin');
    } catch(err) {
        console.log(err);
    }
});

module.exports = router;