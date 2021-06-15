const express = require('express');
const login = require('../service/login');
const signup = require('../service/signup');
const auth = require('./auth');
const router = express.Router();

router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now())
    next()
})

router.get("/", auth,(req, res) => {
    res.send("Hello Gaurav")
})

router.post("/signup",signup);

router.post("/login",login);

module.exports = router;