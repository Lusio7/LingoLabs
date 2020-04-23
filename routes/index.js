const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
// const User = require('../db/User');
const db=require("../db");
const router = express.Router()

router.get('/user', (req, res, next) => {
	console.log('===== user!!======')
	console.log(req.user)
	if (req.user) {
		return res.json({ user: req.user })
	} else {
		return res.json({ user: null })
	}
})


router.post(
	'/api/login',
	function(req, res, next) {
		console.log(req.body)
		console.log('================')
		next()
	},
	passport.authenticate('local'),
	(req, res) => {
		console.log('POST to /login')
		const user = JSON.parse(JSON.stringify(req.user)) // hack
		const cleanUser = Object.assign({}, user)
		if (cleanUser.local) {
			console.log(`Deleting ${cleanUser.local.password}`)
			delete cleanUser.local.password
		}
		res.json({ user: cleanUser })
	}
)

router.post('/api/logout', (req, res) => {
	if (req.user) {
		req.session.destroy()
		res.clearCookie('connect.sid') // clean up!
		return res.json({ msg: 'logging you out' })
	} else {
		return res.json({ msg: 'no user to log out!' })
	}
})

router.post('/api/signup', (req, res) => {
	console.log(req.body);
	const { username, password } = req.body
	// ADD VALIDATION
	db.User.findOne({ 'local.username': username }, (err, userMatch) => {
		if (userMatch) {
			return res.json({
				error: `Sorry, already a user with the username: ${username}`
			})
		}
		const newUser = new db.User({
			'local.username': username,
			'local.password': password
		})
		newUser.save((err, savedUser) => {
			if (err) return res.json(err)
			return res.json(savedUser)
		})
	})
})


/* API entrypoints */
// Singup

// router.post('/signup', (req, res) => {
// 	var user = new User({
// 		username: req.body.username.toLowerCase(),
// 		password: req.body.password
// 	})

// 	user.save().then(() => {

// 		// Token
// 		const token = jwt.sign({id: user.id}, 'jwt_secret')
// 		res.json({token: token})

// 	}).catch((err) => {
// 		res.status().json({})
// 	})
// })
// router.get("/api/random",function(){
// 	console.log("sdsdsdshhworking");
// })

// router.post("/api/signup", function(req, res) {
// 	console.log("signingup")
//     db.User.create({
//       username: req.body.username,
//       password: req.body.password,
      
//     })
//       .then(function() {
//         res.redirect(307, "/api/login");
//       })
//       .catch(function(err) {
//         console.log(err)
//         res.status(401).json(err);
        
//       });
//   });


// Login

// router.post("/api/login", passport.authenticate("local"), function(req, res) {
// 	console.log("login")

//     res.json(req.user);
//   });
// router.post('api/login', passport.authenticate('local', {
// 	session: false
// }), (req, res) => {

// 	// Token
// 	const token = jwt.sign({id: req.user.id}, 'jwt_secret')

// 	res.json({token: token})
// })

// router.get("/api/logout", function(req, res) {
   
//     req.logout();
//     res.redirect("/");
//   })


// Return user information
// router.get('/user', passport.authenticate('jwt', {
// 	session: false
// }), (req, res) => {
// 	if ( !req.user ) {
// 		res.json({
// 			username: 'nobody'
// 		})
// 	}

// 	res.json({
// 		username: req.user.username
// 	})
// })

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
    
//getting the loggedin user info
router.get("/api/user_data", function(req, res) {
    if (!req.user) {
      res.json({});
    } else {
      
      res.json({
          username:req.user.username,
          });
    }
  });

module.exports = router
