'use strict';

const items_controller = require(__dirname + '/../controller/items');

module.exports = router => {

    router.get('/items',    items_controller.get_items);

    return router;
}