
const path = require('path')
const mongoose = require('mongoose')
var mongodbUri = require('mongodb-uri');
mongoose.set('useCreateIndex', true)
const bodyParser = require('body-parser'),
flash = require('connect-flash'),
passportControl = require('./lib/passport-control')


const uri = "mongodb+srv://joey3:rose44@cluster0-ptuvd.gcp.mongodb.net/passport?retryWrites=true";

var mongooseConnectString = mongodbUri.formatMongoose(uri);
mongoose.connect(mongooseConnectString,  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error: '));
db.once('open', function callback () {
    console.log('Successfully connected to MongoDB');
});

const express = require('express'),
			app = express(),
			port = 4000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(passportControl.initialize())

// Routers
app.use('/api', require('./routes'))

// Run server
app.listen(port, () => console.log(`LISTENING ON PORT ${port}!!!`))
