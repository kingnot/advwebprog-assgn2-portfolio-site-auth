/*
 * This file is used to control the views from the index page
 * and render different views depend on the anchor url
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'FEI WANG',
                        message: 'My Portfolio'});
});

/* GET index page which is the same as home page*/
router.get('/index', function(req, res, next) {
  res.render('index', { title: 'FEI WANG',
                        message: 'My Portfolio'});
});

/* GET About Me page */
router.get('/about', function(req, res, next) {
    res.render('about', { title: 'About Me'});
});

/* GET Projects page */
router.get('/project', function(req, res, next) {
    res.render('project', { title: 'Projects'});
});

/* GET Services page */
router.get('/service', function(req, res, next) {
    res.render('service', { title: 'Services'});
});

module.exports = router;
