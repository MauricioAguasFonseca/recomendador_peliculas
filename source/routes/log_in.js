const express = require('express');
const pool = require('../database');
var path = require('path');

const router = express.Router();

router.get('/', (req, res) =>
{
    res.sendFile(path.resolve('../source/views/Log_in.html'));
    console.log("Jyaru es ");
});

router.post('/Home', (req, res) =>
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