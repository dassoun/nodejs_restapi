// load our app server using express somehow...
const express = require('express');
const app = express();
const morgan = require('morgan');


const bodyParser = require('body-parser');

const router = require('./routes/user.js');

app.use(router);


app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('./public'));

app.use(morgan('short'));

app.get("/", (req, res) => {
    console.log("Responding to root route");
    res.send("Hello from ROOOOOT")
});

// localhost:3004
app.listen(3004, () => {
    console.log("Server is up and listening on 3004...");
});