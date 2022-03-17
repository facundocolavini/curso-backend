const controller = require('../controllers/mController.products');
const router = require('express').Router();

router.get('/', controller.get); // read
router.get('/:id', controller.getById); // read by id
router.post('/', controller.post); // create
router.put('/:id', controller.put); // update
router.delete('/:id', controller.delete); // delete

module.exports = router;
