const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || 
    "mongodb://svivoli:" + process.env.MONGODB_PASS + "@ds161335.mlab.com:61335/heroku_t14q4gt8", { useNewUrlParser: true }, function(err) {
    if (err) {
        console.log("Error connecting to Mongoose: " + err)
    } else {
        console.log("The Mongoose connection is ready.")
    };
});

require('./routes/html-routes.js')(app);
require('./routes/api-routes.js')(app);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});