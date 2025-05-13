const express = require('express');
const userController = require('../controllers/user.controller'); // Importez votre contrôleur
const router = express.Router();
const { authenticate } = require('../middlewares/auth.middleware');

router.get('/:email', authenticate ,userController.getUserByEmail);

module.exports = router;
