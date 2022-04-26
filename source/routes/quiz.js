const express = require('express');
const pool = require('../database');
var path = require('path');

const router = express.Router();

router.get('/', (req, res) =>
{
    res.sendFile(path.resolve('../source/views/Quiz.html'));
});

router.post('/Quiz', (req, res) =>
{
    const {usuario, password} = req.body;
    const newlink = 
    {
        usuario,
        password
    };
    console.log(newlink);
    console.log(req.body);
});

module.exports = router;