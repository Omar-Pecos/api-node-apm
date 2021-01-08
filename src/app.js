const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express();

app.use(cors());
app.use(bodyParser.json());

//routes
app.get('/',(req,res) =>{
    res.status(200).json({
        message : "Hello!!"
    })
})