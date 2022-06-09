const Acontroller = require('./controllers/AdminController');
const Ucontroller = require("./controllers/UserController");
const Token  = require("./../middleware/token")
const express = require('express');
const isuserAuth = require('../middleware/auth');
const router = express.Router();
router.post('/signup',Ucontroller.createUser);
router.get('/:getUsers',isuserAuth,Token,Acontroller.getUsers);
router.post('/verify',Acontroller.verifyUser);
router.post('/signin',Ucontroller.signIn);
router.post('/revoketoken',Acontroller.revoketoken);
module.exports = router;