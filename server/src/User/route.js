const router = require("express").Router();
const createUser = require("./controller/Create-User");
const loginAccount = require("./controller/Student-Login");

router.post("/create-account",  createUser.createUser );
router.post("/get-users", createUser.getAllUser)
router.post("/login", loginAccount.login_account);


module.exports = router;