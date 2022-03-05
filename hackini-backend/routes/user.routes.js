const express = require("express"),
    userControllers = require('../database/models/user.controller'),
    {isLoggedIn} = require("../middleware/auth"),
    router = express.Router();


    router.post('/signup',userControllers.createUser);
    router.post('/login', userControllers.login);

module.exports = router;