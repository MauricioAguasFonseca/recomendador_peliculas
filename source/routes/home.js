const express = require('express');
const pool = require('../database');
var path = require('path');

const router = express.Router();

router.get('/', (req, res) =>
{
    res.sendFile(path.resolve('../source/views/Home.html'));
});

module.exports = router;