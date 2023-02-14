const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
    try {
        res.render('signup')
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', withAuth, (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/homepage');
        return;
    }
    res.render('login');
});

router.get('/homepage', withAuth, async (req, res) => {
    try {
        res.render('homepage');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/vehicledetails', withAuth, async (req, res) => {
    try {
        res.render('vehicleDetails');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/vehicleform', async (req, res) => {
    try {
        res.render('vehicleForm');
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;