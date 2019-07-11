'use strict';

const items_controller = require(__dirname + '/../controller/items');

module.exports = router => {

    router.get('/items',            items_controller.get_items);
    router.get('/items/:id',        items_controller.get_item);
    router.post('/items',           items_controller.add_item);
    router.post('/items/:id', items_controller.update_item);
    router.delete('/items/:id',     items_controller.delete_item);
    router.get('/items_add',        items_controller.add_item_ui);
    return router;
}