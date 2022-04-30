
const express = require('express');



const router = express.Router();
const authController = require('../controllers/auth');
const scrapController = require('../controllers/scrapper');

router.post('/signUp', authController.signUp);
router.post('/login', authController.login);
router.post('/track', scrapController.track);



module.exports = router;