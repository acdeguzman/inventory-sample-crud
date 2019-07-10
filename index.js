'use strict';

const express = require('express');
const app = express();
const port = 3000;
const mysql = require('mysql');

app.listen(port, () => {

    console.log(`Listening at port ${port}`);
});

app.get('/', (req, res) => {

    res.send('Sample Inventory CRUD landing page');
});