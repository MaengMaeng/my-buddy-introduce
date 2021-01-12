const router = require('express').Router();
const auth = require('./auth.js');

router.use('/login', [auth.findBySocialId, auth.findByEmail, auth.createUser]);

module.exports = router;