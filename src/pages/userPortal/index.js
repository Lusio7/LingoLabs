/* eslint-disable no-lone-blocks */
import React, { useEffect, useState } from "react";
import API from "../../utils/API"
import Chat from "../../Components/Chat"
import  "./Style.css"
import Moment from "react-moment";


function UserPortal(props){
 



const[userProfile, setUserProfile]=useState({
    name:"Shawnster",
    
    purchaseHistory:[
        {_id:3, itemname:"moviemagic",price:1200.00,downloadlink:"https://github.com/ShawnWhy/movie-magic-Shawn/archive/master.zip", PurchaseDate:"1976-04-19T12:59-0500"},
    {_id:4, itemname:"fitness tracker",price:1300.00,downloadlink:"https://github.com/ShawnWhy/Fitness-Tracker/archive/master.zip", PurchaseDate:"1976-04-19T12:59-0500"},
    {_id:5, itemname:"Viscount of Sandwich",price:1500.00,downloadlink:"https://github.com/ShawnWhy/VicountofSandwich/archive/master.zip", PurchaseDate :1587245855919},

    ],

    shoppingCart: [{_id:1,  itemname: "crazywebsite", price: 1200.00, date:1587245855919},{_id:2, itemname: "goodwebsite", price: 1250.50, date:1587245855919}
    ]
});

async function getUserInformation(name){
    const LoggedUser = await API.getUserInfo(name)
    console.log(LoggedUser);
    if(LoggedUser.data.length>0){
    setUserProfile( {...userProfile, purchaseHistory : LoggedUser.data[0].purchase, shoppingCart:LoggedUser.data[0].shoppingcart})}

    
}

useEffect(()=>{
var userName=props.name
console.log("=======username========")
console.log(userName)
if(userName !=="noone"){
getUserInformation(userName)}


},[props.name])


return(

    <div>
        <div className="padding Row"></div>
        <div className="username"> 
            <p>welcome {props.name} </p>
        </div>
        <div className="shoppingcart">
        <h1 className="text-center">Shopping cart: {userProfile.shoppingCart.length} items</h1>
        {!userProfile.shoppingCart.length ? (
           <h4 className="text-center">shopping cart empty</h4>
         ) : (
           <div>
             {userProfile.shoppingCart.map(item => {
               return (
                   <div>
               <div>{item.itemname} price: {item.price} </div>
               <button keyValue={item._id}>purchase</button>
               </div>
                 )})}
                

        </div> )}
        </div>

        <h4 className="text-center">Purchase history</h4>
        {!userProfile.purchaseHistory.length ?(
            <h4 className = "textCenter">no purchase history</h4>) : (
                <div>
                    {userProfile.purchaseHistory.map(item =>{
                        return (
                            <div>
                                <div>{item.itemname} price : {item.price} purchase date: <Moment format ="YYYY/MM/DD/HH:MM">{item.PurchaseDate}</Moment></div>
                                <a href={item.downloadlink} download>download link</a>


                            </div>
                        )
                    })}


                </div>
            )}

        <Chat />
</div>
   




)
};

export default UserPortal;

// useEffect(() => {
//     // For demonstration purposes, we mock an API call.
//     API.getDeveloper.then((res) => {
//       setDeveloperState(res);
//       console.log("Developer State:");
//       console.log(developerState);
//     });
//   }, []);