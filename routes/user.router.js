const express = require('express');
const router = express.Router();

const {getAllUsers,creteUser,getSingleUser} = require("../controllers/user.controllers")

router.get("/getUsers",getAllUsers)

router.get("/getSingleUser/:email",getSingleUser)

router.post("/createUser",creteUser)




module.exports = router