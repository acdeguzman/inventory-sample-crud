'use strict';

const express = require('express');
const app = express();
const port = 3000;
const body_parser = require('body-parser');

app.use(body_parser.urlencoded({extended: false}));

/* Connect router */
app.use('/api/v1', require('./config/router')(express.Router()));

app.use('(/)', (req, res) => {

    return res.redirect('/api/v1');
});

app.use((req, res, next) => {

    return res.send('Resource not found');
});


app.listen(port, () => {

    console.log(`Listening at port ${port}`);
});