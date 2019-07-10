'use strict';

const items_controller = require(__dirname + '/../controller/items');

module.exports = router => {

    router.get('/items',    items_controller.get_items);
    router.post('/items',   items_controller.add_item);

    return router;
}