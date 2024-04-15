
require("dotenv").config()
const displayRoutes = require('express-routemap');
const express = require('express');
const app = express();
const port = process.env.PORT

const userRoutes = require('./routes/user.router')
const dbConnection = require('./config/database');

app.use(express.json())


app.use("/app/vl",userRoutes)

dbConnection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected as id ' + dbConnection.threadId);


    app.listen(port, ()=> {console.log(`listening on ${port}`)
    displayRoutes(app)
});
});

 

app.use((req,res)=>{
    res.status(400).json({
        status: false,
        message:"what you are looking for is not here"
    })
})