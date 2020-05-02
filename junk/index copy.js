/* eslint-disable no-lone-blocks */
import React, { useEffect, useState } from "react";
import API from "../../utils/API";
// import  "./Style.css"
import Moment from "react-moment";
var req = {username:"Shawndo",
            email:"shawnyudesin@gmail.com"}

function Chat(props){
    const [messages, setMessages]=useState(
        // [{name:"me",message:"Please start"},{name:"me",message:"please type"}]
        []
    )

    // useEffect( 
    //     API.getUser(req.username)
    //     .then(res => {
    //         var name =res.username;
    //         setUserName(name)})
        

        
    // )
    const [userName, setUserName]=useState(
        props.username
    )
    
 
    var socket = new WebSocket("ws://localhost:3002")
    socket.onopen = function(){
        socket.send(JSON.stringify({
            type:"name",
            data: userName
        }))
    }
    socket.onmessage=function(event){
        let newMessages=messages;
        console.log(event.data.name);
        console.log("name......")
        let json = JSON.parse(event.data);
        console.log(json);
        // let time = Date.now()
        let message={name:json.name,
                     message:json.data,
                    //  time:time
                    };
        newMessages.push(message);
        setMessages(newMessages);

        }
        const[hello, setHello]=useState(
            ""
        )
        
    const sayHello=function (event){

        setHello(event.target.value);
    }

   
    const handleMessageOut= function(event){
        console.log("sdsds")
        event.preventDefault();
        event.stopPropagation();
        // console.log(event.target.parent().children("first-child"))
        let newMessages=messages;
       
        let name = "you";
        // var time = Date.now()
        let message = {name:name,
                        message:hello
                    // time:time
                };
        newMessages.push(message);
        setMessages(newMessages);
                        socket.send(JSON.stringify({
                            type:"message",
                            data:hello
                        }))


    }
    socket.onclose=function(){
        console.log("logging off");
    }
    

    socket.onerror=function(){
        console.error();
        
    }


    return(
        <div>
            <div>{JSON.stringify(messages)}</div>
    <div>{hello}</div>
        <div className="chatWindow">
        {!messages.length ? (
           <h1 className="text-center">messages</h1>
         ) : (
           <div>
             {messages.map(message => {
               return (
                 <div className = {(message.name==="you"?"toLeft":"toRight")}>{message.name} : {message.message}</div>
               );
             })}
           </div>
         )}
            
        </div>
        
        <input type="text" placeholder="message" 
        onChange={sayHello}
        />
        <button onClick={handleMessageOut}>submit</button>
        </div>

    )
}

export default Chat;
