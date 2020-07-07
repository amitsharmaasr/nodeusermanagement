const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const user = require('./app/route/user')
const configRoute = require('./app/route/config')

require('dotenv').config()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// api routes
app.use('/', configRoute);
app.use('/user', user);


// start server with mongo connection
const port = process.env.PORT;

mongoose.connect(process.env.DBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(_ => {
        console.log('Connection with Mongodb established successfully');
        const server = app.listen(port, function () {
        console.log('Server listening on port ' + port);
        });
    })
    .catch(err => {
        console.log('Error While Establishing Connection' + err);
    });
