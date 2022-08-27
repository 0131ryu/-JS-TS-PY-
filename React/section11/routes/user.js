const express = require("express");

const { isLoggedIn } = require("./middlewares");
const User = require("../models/user");
const { addFollowings } = require("../controllers/user");
const router = express.Router();

// Post /user/1/follow
router.post("/:id/follow", isLoggedIn, addFollowings);

module.exports = router;
