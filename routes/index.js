const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../db/User');
const db=require("../db");
const router = express.Router()


// router.post("/api/fakeuser", (req,res) =>{
// 	res.json({username:"fakeuser"})
// },
/* API entrypoints */
// Singup
router.post('/api/signup', (req, res) => {
	var user = new User({
		username: req.body.username,
		password: req.body.password
	})

	user.save()
	// .then(() => {

		// Token
		
		// const token = jwt.sign({username: user.username}, 'jwt_secret')
		// res.json({token: token,
		// 		  username:user.username})

	// })
	.catch((err) => {
		res.status().json({})
	})
})

// Login
router.post('/api/login', passport.authenticate('local'),

(req, res) => {

	res.json(req.user);

	
})

// Return user information
router.get('/api/userme', 
// passport.authenticate('local', {
	
// }), 
(req, res) => {
	if ( !req.user ) {
		res.json({
			username: 'nobody'
		})
	}

	res.json({
		username: req.user.username
	})
})

router.post('/logout', function(req, res) {
	console.log("before logginout");
	req.logout();
	console.log("logged out fo real")
	res.redirect('/');
  });
  



router.get('/api/userinformation/:id',(req, res) =>{
    var username =req.params.id;
    db.UserInfo.find({username:username})
	.then(dbModel => res.json(dbModel))
	.catch(err => res.status(422).json(err))

})

//createing userinformation
router.post("/api/userinformation",(req,res)=>{
	console.log("getting info")
	console.log(req.body);
	var newUser = {username:req.body.username,
	email:req.body.email,
	};
    db.UserInfo.create(newUser)
	.then(dbModel => res.json(dbModel))
	.catch(err => res.status(422).json(err))
})


    


module.exports = router
