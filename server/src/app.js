const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/status',(req,res)=>{
    res.send({
        myInfo: {Name:"Sahatsawat",LastName:"Boonchit",Age:18}
    })
})

app.post('/register',(req,res)=>{
    res.send({
        message:`Welcome ${req.body.email}, You are user this website.`
    })
})

app.listen(process.env.PORT || 8081)