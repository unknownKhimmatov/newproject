const express = require("express");
const userContoller = require("../controller/user");
const router = express.Router();


// post user
router.post("/user", userContoller.postUser);
// get users
router.get("/users", userContoller.getUsers);
//get user id
router.get("/userId", userContoller.getUserId);
// delete user by id
router.delete("/user", userContoller.deleteUserById);

module.exports = router;