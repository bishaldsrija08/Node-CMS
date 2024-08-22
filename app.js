// const app = require('express')()
const express = require('express')
const app = express()
require('dotenv').config()

app.set('view engine', 'ejs')
require("./model/index")
app.get('/home', (req, res)=>{
    const data =
    {
        name : "Bishal Rijal",
        message: "Babal node",
        age: 22
    }
res.render("home.ejs",{
        haha:data
    })
})

// Give access to all the files and folder inside public
app.use(express.static('public/'))



app.get('/about', (req, res)=>{
res.render("about.ejs")
})

app.listen(3000, ()=>{
    console.log("hi, World")
})