'use strict';

const db = require(__dirname + '/../lib/database');

exports.get_items = (req, res) => {

    const query = 'SELECT * FROM items';

    db.query(query, (err, result, fields) => {

        if(err) return err;

        return res.render('pages/items',{ data: result });
    });
}

exports.get_item = (req, res) => {

    const { id } = req.params;

    const query =  `SELECT * FROM items where id = ${id}`;

    db.query(query, (err, result, fields) => {

        if(err) return res.send(err);

        return res.render('pages/update_item', {data: result[0]});
    });
}

exports.add_item = (req, res) => {

    const {
        name,
        qty,
        amount
    } = req.body;

    if(isNaN(qty) || isNaN(amount)) return res.render('pages/add_item');
    
    let query = `INSERT INTO items (name, qty, amount) values ('${name}', ${qty}, ${amount})`;

    db.query(query, (err, result, fields) => {

        if(err) return res.send(err);

        query = `SELECT * FROM items`;

        db.query(query, (err1, result1) => {

            if(err1) return res.send(err)

            res.render('pages/items', {data: result1});
        });
    });
}

exports.update_item = (req, res) => {

    const { id } = req.params;
    
    const {
        name,
        qty,
        amount
    } = req.body;

    if(isNaN(qty) || isNaN(amount)) {
        
        req.body.id = id;
        return res.render('pages/update_item', {data: req.body});

    }

    let query = `UPDATE items SET name = '${name}', qty = ${qty}, amount = ${amount} WHERE id = ${id}`;

    db.query(query, (err, result, fields) => {

        if(err) return res.send(err);

        query = `SELECT * FROM items`;

        db.query(query, (err1, result1) => {

            if(err) return res.send(err);

            return res.render('pages/items', {data: result1});
        });
    });
}

exports.delete_item = (req, res) => {

    const { id } = req.params;

    let query = `DELETE FROM items WHERE id = ${id}`;

    db.query(query, (err, result, fields) => {

        if(err) return res.send(err);

        query = `SELECT * FROM items`;
        
        db.query(query, (err1, result1) => {

            if(err) return res.send(err);

            return res.render('pages/items', {data: result1});
        });
    });
}

exports.add_item_ui = (req, res) => {

    return res.render('pages/add_item')
}