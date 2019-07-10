'use strict';

const mysql = require('mysql');

module.exports = mysql.createConnection({

    host: 'localhost',
    user: 'root',   // replace with own database user
    password: 'user', // replace with own database password
    database: 'inventory'
});