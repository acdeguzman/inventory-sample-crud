'use strict';

const db = require(__dirname + '/../lib/database');

exports.get_items = (req, res) => {

    const query = 'SELECT * FROM items';

    db.query(query, (err, result, fields) => {

        if(err) return err;

        return res.send({data: result});
    });
}

exports.get_item = (req, res) => {

    const { id } = req.params;

    const query =  `SELECT * FROM items where id = ${id}`;

    db.query(query, (err, result, fields) => {

        if(err) return res.send(err);

        return res.send({data: result[0]});
    });
}

exports.add_item = (req, res) => {

    const {
        name,
        qty,
        amount
    } = req.body;

    const query = `INSERT INTO items (name, qty, amount) values ('${name}', ${qty}, ${amount})`;

    db.query(query, (err, result, fields) => {

        if(err) return res.send(err);

        return res.send({data: {message: "Item added!"}});
    });
}

exports.update_item = (req, res) => {

    const { id } = req.params;
    
    const {
        name,
        qty,
        amount
    } = req.body;

    const query = `UPDATE items SET name = '${name}', qty = ${qty}, amount = ${amount} WHERE id = ${id}`;

    db.query(query, (err, result, fields) => {

        if(err) return res.send(err);

        return res.send({data: {message: 'Item updated!'}});
    });
}