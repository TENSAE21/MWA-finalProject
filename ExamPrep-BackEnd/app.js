const express = require('express')
const morgan = require('morgan')
const fs = require('fs')
const cors = require('cors')
const qaRouter = require('./routes/qaRoute')

const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan('common', {
    stream: fs.createWriteStream('./access.log', {flags: 'a'})
}));
app.use(morgan('dev'));
app.use("public", express.static("assets/pics"))

app.use("/qa", qaRouter)

app.get("/", (req,res)=>{
    res.send({result: "ok"})
})


app.use((err,req,res,next)=>{
    return res.json({error: err.message})
})


app.listen(3000, _=>console.log(`running on port 3000`))