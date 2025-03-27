const express = require('express');
const router = express.Router();
const rolController = require('../controllers/rolController');

router.get('/', rolController.getAllRoles);
router.post('/', rolController.createRol);

module.exports = router;
