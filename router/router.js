const express = require("express");
const userContoller = require("../controller/user");
const router = express.Router();


router.post("/user", userContoller.postUser);
// get users
router.get("/users", userContoller.getUsers);
//get user id
router.get("/userId", userContoller.getUserId);
// delete user by id
router.delete("/user", userContoller.deleteUserById);
// update user by id
router.put("/user", userContoller.updateUserById);

module.exports = router;