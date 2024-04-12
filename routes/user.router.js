const express = require('express');
const router = express.Router();

const {getAllUsers,creteUser,getSingleUser} = require("../controllers/user.controllers")

router.get("/getUsers",getAllUsers)

router.get("/getSingleUsers/:coustomer_id_or_email",getSingleUser)

router.post("/createUser",creteUser)




module.exports = router