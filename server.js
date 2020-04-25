require("dotenv").config();
const compression = require("compression");
// const path = require('path')
const mongoose = require('mongoose')
var session = require("express-session");
mongoose.set('useCreateIndex', true)
// const passport = require("passport");
const passportControl = require('./lib/passport-control');
const routes = require("./routes")

const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;




app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use(compression());
if (process.env.NODE_ENV === "production") {
	app.use(express.static("./public"));
  }
app.use(
	session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
  );
  app.use(passportControl.initialize());
  app.use(passportControl.session());
  
// Routers
app.use(routes)

app.use(function(err, req, res, next) {
	console.log('====== ERROR =======')
	console.error(err.stack)
	res.status(500)
})
app.use(function(req, res, next) {
		console.log('===== passport user =======')
		console.log(req.session)
		console.log(req.user)
		console.log('===== END =======')
})


// Run server
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/LingoLabs", { useCreateIndex: true,
useNewUrlParser: true,useUnifiedTopology: true},);

app.listen(PORT, function() {
	console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
  


// app.use(function(req, res, next) {
// 	console.log('===== passport user =======')
// 	console.log(req.session)
// 	console.log(req.user)
// 	console.log('===== END =======')
// 	next()
// })
// testing
// app.get(
// 	'/auth/google/callback',
// 	(req, res, next) => {
// 		console.log(`req.user: ${req.user}`)
// 		console.log('======= /auth/google/callback was called! =====')
// 		next()
// 	},
// 	passport.authenticate('google', { failureRedirect: '/login' }),
// 	(req, res) => {
// 		res.redirect('/')
// 	}
// )
// app.use(
// 	session({
// 		secret: process.env.APP_SECRET || 'this is the default passphrase',
// 		store: new MongoStore({ mongooseConnection: dbConnection }),
// 		resave: false,
// 		saveUninitialized: false
// 	})
// )