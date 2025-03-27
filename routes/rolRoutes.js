const express = require('express');
const { getAllRoles, createRol } = require('../controllers/rolController');

const router = express.Router();

router.get('/', getAllRoles);
router.post('/', createRol);

module.exports = router;
