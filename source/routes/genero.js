const express = require('express');
const pool = require('../database');
var path = require('path');

const router = express.Router();

router.get('/', (req, res) =>
{
    res.sendFile(path.resolve('../source/views/Genero.html'));
});

router.post('/Quiz', (req, res) =>
{
    const {genero} = req.body;
    const newlink = 
    {
        genero,
    };
    res.sendFile(path.resolve('../source/views/Quiz.html'));
    console.log(newlink);
    console.log(req.body);
    console.log("Si posteo");
});

module.exports = router;