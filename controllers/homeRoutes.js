const router = require('express').Router();
//const { User } = require('../models');
//const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
    try {
        res.render('homepage')
        /*const userData = await User.findAll({
            attributes: { exclude: ['password'] },
            order: [['name', 'ASC']],
        });

        const users = userData.map((project) => project.get({ plain: true }));

        res.render('homepage', {
            users,
            logged_in: req.session.logged_in,
        });*/
    } catch (err) {
        res.status(500).json(err);
    }
});
/*
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }
    res.render('login');
});
*/
router.get('/login', async (req, res) => {
    try {
        res.render('login');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/signup', async (req, res) => {
    try {
        res.render('signup');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/vehicledetails', async (req, res) => {
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