const router = require('express').Router();
const mail = require('./mail');

router.use('/test', mail.test);
router.use('/invite', mail.sendInviteMail);

module.exports = router;