const express = require('express')
const cors = require('cors')
const qaRouter = require('./routes/qaRoute')

const app = express()
app.use(cors())
app.use(express.json())


app.use("/qa", qaRouter)

app.get("/", (req,res)=>{
    res.send({result: "ok"})
})

// todo: refresh from client to return index.html on unknown routes

app.use((err,req,res,next)=>{
    return res.json({error: err.message})
})


app.listen(3000, _=>console.log(`running on port 3000`))