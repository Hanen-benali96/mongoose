const express = require('express')

const mongoose=require('mongoose')

const route = require('./routes/user')
const app =express()
app.use(express.json())
app.use('/api', route)
mongoose.connect(process.envMONGO_URI||"mongodb://127.0.0.1:27017/posts", { useNewUrlParser: true, useUnifiedTopology: true  })
.then(()=>console.log("database connected successful"))
.catch(err=>console.error(err))

app.listen(8000)