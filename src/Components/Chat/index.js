/* eslint-disable no-lone-blocks */
import React, { useEffect, useState } from "react";
import API from "../../utils/API";
// import  "./Style.css"
import Moment from "react-moment";
<<<<<<< HEAD
var req = {username:"Shawndo",
            email:"shawnyudesin@gmail.com"}

function Chat(){

    // useEffect( 
    //     API.getUser(req.username)
    //     .then(res => {
    //         var name =res.username;
    //         setUserName(name)})
        


    // )
    const [userName, setUserName]=useState(
        "shawnster"
    )
    var socket = new WebSocket("ws://localhost:3002")
    socket.open = function(){
        socket.send(JSON.stringify({
            type:"name",
            data: userName
        }))
    }
    socket.onmessage=function(event){
        var newMessages=messages;
        var json = JSON.parse(event.data);
        var time = Date.now()
        var message={name:json.name,
                     message:json.data,
                     time:time};
        newMessages.push(message);
        setMessages(newMessages);

        }
        
    


    const [messages, setMessages]=useState(
        []
    )
    const handleMessageOut= function(event){
        var newMessages=messages;
        var text = event.target.value;
        var name = "you";
        var time = Date.now()
        var message = {name:name,
                        message:text,
                    time:time};
        newMessages.push(message);
        setMessages(newMessages);
                        


    }

    return(
        <div>
        <div className="chatWindow">
            
        </div>
        <input type="text" placeholder="message"/>
        <button onClick={handleMessageOut}>submit</button>
        </div>
=======
import reactDOM from "react-dom";
import moment from "moment"
import io from "socket.io-client";
import { set } from "mongoose";


function Chat(props){

const socket = io ("http://localhost:3000",{
    transports:["websocket","polling"]
});

const [userName, setUserName]=useState(
  props.username
);

const [users, setUsers]= useState([]);
const[message, setMessage] = useState("");
const[messages, setMessages]= useState([]);

useEffect(()=>{
    socket.on("connect",function(){
    socket.emit("username", userName);
        })
    
 
    socket.on("users", users =>{
        setUsers(users);
    }); 

    socket.on("message", message => {
      console.log(message);
      // var id = message.id
      // console.log(users[id])
        setMessages(messages =>[...messages, message]);
    });
    socket.on("connected", user =>{
      setUsers(users =>[...users, user]);
    });

    socket.on("disconnected", id=>{
      setUsers(users=> {
        return users.filter(user => user.id !==id);
      })
    })

  }, []);

  const handleMessageOut = event =>{
   

    event.preventDefault();
    var newMessage={
      message:message,
      username:userName
    }
      socket.emit("send",newMessage);
      setMessage("");
  }

 return(
        <div className="chatbox">
            {/* <div>{JSON.stringify(messages)}</div> */}
    {/* <div>{message}</div>
    <div>{JSON.stringify(users)}</div> */}
        <div className="chatWindow">
        {!messages.length ? (
           <h1 className="text-center">messages</h1>
         ) : (
           <div>
             {messages.map(({user, date, text}, index)=> 
               (
                 <div key={index}
                 className = {(user===userName?"toLeft":"toRight")}
                 >
                   {user} 
                   : {text}   </div>
               
             ))}
           </div>
         )}
            
        </div>
        
        <input type="text" placeholder="message" value={message}
        onChange={event => setMessage(event.currentTarget.value)}
        />
        <button onClick={handleMessageOut}>submit</button>
        
        <div className="col-md-4">
           <h6>Users</h6>
           <ul id="users">
             {users.map(({ name, id }) => (
               <li key={id}>{name}</li>
             ))}
           </ul>
         </div>
         </div>
>>>>>>> f7624258bcbe823905d63d2ac27d82b7cc261551

    )
}

export default Chat;
<<<<<<< HEAD
=======

>>>>>>> f7624258bcbe823905d63d2ac27d82b7cc261551
