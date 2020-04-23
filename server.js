require("dotenv").config();
const compression = require("compression");
// const path = require('path')
const mongoose = require('mongoose')
var session = require("express-session");
mongoose.set('useCreateIndex', true)
var passport = require("./passport");
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
  app.use(passport.initialize());
  app.use(passport.session());
  
// Routers
app.use(routes)

// Run server
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/LingoLabs", { useCreateIndex: true,
useNewUrlParser: true,useUnifiedTopology: true},);

app.listen(PORT, function() {
	console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
  


