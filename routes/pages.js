
const express = require('express');



const router = express.Router();


router.get('/', (req, res) => {
    res.render('index')
});

router.get('/signUp', (req, res) => {
    res.render('signUp')
});

router.get('/login', (req, res) => {
    res.render('login')
});

router.get('/track', (req, res) => {
    res.render('track')
});

module.exports = router;