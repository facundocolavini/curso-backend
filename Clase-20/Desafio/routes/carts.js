const { mongoCartsController } = require('../controllers');
const router = require('express').Router();

router.get('/', mongoCartsController.get); // read
router.post('/', mongoCartsController.post); // read

module.exports = router;
