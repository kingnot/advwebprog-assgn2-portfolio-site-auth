/*
 * This file is used to control the views from the contact page
 * and render different views depend on the anchor/submission url
 */

var express = require('express');
var router = express.Router();

/* GET Contact page */
router.get('/', function(req, res, next) {
    res.render('contact', { title: 'Contact Me'});
});

/* POST form will render to success info page */
router.post('/', function(req, res, next) {
    res.render('success', { title: 'Form Submitted Successfully'});
});

module.exports = router;
