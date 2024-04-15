const express = require('express');
const router = express.Router();

const {getAllUsers,creteUser,getSingleUser,creditAcct,deleteSingleUser} = require("../controllers/user.controllers")

router.get("/getUsers",getAllUsers)

router.get("/getSingleUser/:email",getSingleUser)

router.post("/createUser",creteUser)

router.patch("/creditAcct/:email",creditAcct)

router.delete("/deleteAcct/:email",deleteSingleUser)


module.exports = router