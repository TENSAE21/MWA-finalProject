require('./config/config');
require('./models/db');
require('./config/passportConfig');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');

const rtsIndex = require('./routes/index.router');
const qaRouter = require('./routes/qaRoute')


// middleware
const app = express()
app.use(cors(
    {origin:'*'}
))

app.use(bodyParser.json());
app.use(passport.initialize());

app.use('/api/user', rtsIndex);
app.use("/api/qa", qaRouter)

app.get("/", (req,res)=>{
    res.send({result: "ok"})
})


// error handler
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
    else{
        console.log(err);
    }
});


app.listen(3000, _=>console.log(`running on port 3000`))