// libaries
const express = require('express');
const app = express();
const port = 8000
const cors = require('cors');
const  route  = require('./src/routes/routes');
const mongoose = require('mongoose')
// env config
require('dotenv').config()

// middleware
app.use(express.json())
app.use(cors())
app.use(route)

// connect db
mongoose.connect(process.env.db_Link)
.then(()=>{console.log(`mongodb connected`)})
.catch((err)=>{console.log(err)})






// running server
app.listen(port,()=>{
console.log(`This server is running at port: ${port}`)
})