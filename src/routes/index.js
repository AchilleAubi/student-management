const express = require('express');
const router = express.Router();
const authRoutes = require('./auth.routes');
const userRoutes = require('./user.routes');

router.use('/auth', authRoutes);
router.use('/user', userRoutes);

module.exports = router;