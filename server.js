const express = require('express');
const port = 3000;
const app = express();
const path = require('path');

const router = express.Router();

app.use(express.static('public'));

router.get('/', function (req, res) {
    // res.send('<h1>Hello World!</h1>');
    res.sendFile(path.join(__dirname+'/public/index.html'));
});

router.get('/aboutus', function (req, res) {
    // res.send('<h1>Hello World!</h1>');
    res.sendFile(path.join(__dirname+'/public/aboutus.html'));
});

router.get('/contact', function (req, res) {
    // res.send('<h1>Hello World!</h1>');
    res.sendFile(path.join(__dirname+'/public/contact.html'));
});
router.get('/slp', function (req, res) {
    // res.send('<h1>Hello World!</h1>');
    res.sendFile(path.join(__dirname+'/public/slp.html'));
});
router.get('/partners', function (req, res) {
    // res.send('<h1>Hello World!</h1>');
    res.sendFile(path.join(__dirname+'/public/partners.html'));
});



app.use('/', router);
app.listen(port, function() {
    console.log("Server is running on "+ port +" port");
});
