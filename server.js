require("dotenv").config();
const compression = require("compression");
// const path = require('path')
const mongoose = require('mongoose')
var session = require("express-session");
mongoose.set('useCreateIndex', true)
// const passport = require("passport");
const passportControl = require('./lib/passport-control');
const routes = require("./routes")
const db= require("./db")

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
useNewUrlParser: true,useUnifiedTopology: true, useFindAndModify:false},);

db.UserInfo.create({username:"nobody", email:"somethng@smoething.com"},
function(){db.Item.create({itemname:"Niko Site #1", price:1200.00})
.then(({_id}) => db.UserInfo.findOneAndUpdate({username:"nobody"}, { $push: { shoppingcart: _id } }, { new: true },
function(){db.Item.create({itemname:"Niko Site #2", price:1250.00, purchased:true,downloadlink:"https://github.com/ShawnWhy/movie-magic-Shawn/archive/master.zip" })
.then(({_id}) => db.UserInfo.findOneAndUpdate({username:"nobody"}, { $push: { purchase: _id } }, { new: true },
function(){db.Item.create({itemname:"Niko Site #5", price:1350.00, purchased:true,downloadlink:"https://github.com/ShawnWhy/movie-magic-Shawn/archive/master.zip" })
.then(({_id}) => db.UserInfo.findOneAndUpdate({username:"nobody"}, { $push: { purchase: _id } }, { new: true },
function(){db.Item.create({itemname:"Niko Site #6", price:1240.00})
.then(({_id}) => db.UserInfo.findOneAndUpdate({username:"nobody"}, { $push: { shoppingcart: _id } }, { new: true },
function(){db.Item.create({itemname:"Niko Site #7", price:1340.00})
.then(({_id}) => db.UserInfo.findOneAndUpdate({username:"nobody"}, { $push: { shoppingcart: _id } }, { new: true },


))}
))}
))}
))}

))})


app.listen(PORT, function() {
	console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
  
//   .then(({_id}) => db.UserInfo.findOneAndUpdate({username:"nobody"}, { $push: { shoppingcart: _id } }, { new: true },)
//   .then(function(){db.Item.create({itemname:"Niko Site #2", price:1400.00})}
//   .then(({_id}) => db.UserInfo.findOneAndUpdate({username:"nobody"}, { $push: { shoppingcart: _id } }, { new: true },)
//   // db.Item.create({itemname:"Niko Site #2", price:1250.00,purchased:true, downloadlink:"https://github.com/ShawnWhy/movie-magic-Shawn/archive/master.zip"},
//   // ({_id}) => db.UserInfo.findOneAndUpdate({username:"nobody"}, { $push: { purchased: _id } }, { new: true },
//   // db.Item.create({itemname:"Niko Site #5", price:1230.00},
//   // ({_id}) => db.UserInfo.findOneAndUpdate({username:"nobody"}, { $push: { shoppingcart: _id } }, { new: true },
//   // db.Item.create({itemname:"Niko Site #5", price:1400.00, purchased:true, downloadlink:"https://github.com/HowardDaniels/the-daily-mesh/archive/master.zip"},
//   // ({_id}) => db.UserInfo.findOneAndUpdate({username:"nobody"}, { $push: { purchased: _id } }, { new: true },
  
//   ))))

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