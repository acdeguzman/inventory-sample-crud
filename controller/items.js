'use strict';

const db = require(__dirname + '/../lib/database');

exports.get_items = (req, res) => {

    const query = 'SELECT * FROM items';

    db.query(query, (err, result, fields) => {

        if(err) return err;

        return res.send(result);
    });
}