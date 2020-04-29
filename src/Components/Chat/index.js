/* eslint-disable no-lone-blocks */
import React, { useEffect, useState } from "react";
import API from "../../utils/API";
// import  "./Style.css"
import Moment from "react-moment";
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

    )
}

export default Chat;
