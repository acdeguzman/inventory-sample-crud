'use strict';

const express = require('express');
const app = express();
const port = 3000;

/* Connect router */
app.use('/api/v1', require('./config/router')(express.Router()));

app.get('/api/v1', (req, res) => {

    return res.send('Welcome to Sample CRUD API');
})

app.use('/', (req, res) => {

    return res.redirect('/api/v1');
});


app.listen(port, () => {

    console.log(`Listening at port ${port}`);
});