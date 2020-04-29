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
	.then((data)=>res.json(data))
	
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
	console.log("before")
	req.logout();
	console.log("logged out fo real")
	res.json({logout:"done"});
  });
  
  router.post("/moveToPurchased", function(req,res){
	  var body = req.body;
	  console.log(body)
	db.UserInfo
	.update( 
	  {username: body.username}, 
	  { $pull: {shoppingcart:body.id } },
	
	
	db.UserInfo.findOneAndUpdate({username:body.username}, { $push: { purchase: body.id } }, { new: true })
	.then(()=>{console.log("did switch")}))
	

	
	.then(dbMove =>res.json(dbMove))
	.catch(err=>res.json(err))
	})

	

	// router.post("/moveToPurchasedTwo",function(req,res){
	// 	var body = req.body
	// 	console.log("------2nd round");
	// 	user.update(
	// 		{username:body.username},
	// 		{$push:{purchase}}
	// 	)
	// })
 


router.get('/api/userInfoByName/:id',(req, res) =>{
    var username =req.params.id;
	db.UserInfo.find({username:username})
	.populate("purchase shoppingcart")
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

router.post("/api/toCart",(req,res)=>{
	console.log("item")
	console.log(req.body);
	db.Item.create({
		itemname:req.body.name,
		price:req.body.price,
		downloadlink:req.body.link
	})
	.then(({_id})=>db.UserInfo.findOneAndUpdate({username:req.body.username},{$push:{shoppingcart:_id}},{ new: true })
	

)
.then(dbModel => res.json(dbModel))
.catch(err => res.status(422).json(err))
})


    


module.exports = router


// app.get("/allLogged", function(req, res){
//     db.AllLog.find({})
//       .populate("strengthexcs enduranceexcs flexibilityexcs balanceexcs")
//       .then(dbAllLog => {
//         res.json(dbAllLog);
//       })
//       .catch(err => {
//         res.json(err);
//       });
  
//     });