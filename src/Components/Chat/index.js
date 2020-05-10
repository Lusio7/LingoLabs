/* eslint-disable no-lone-blocks */
import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import "../Chat/chat.css";
import Moment from "react-moment";
import reactDOM from "react-dom";
import moment from "moment";
import io from "socket.io-client";
import { set } from "mongoose";

function Chat(props) {
  const socket = io("http://localhost:3001", {
    transports: ["websocket", "polling"],
  });

  const [userName, setUserName] = useState(props.username);

  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("connect", function () {
      socket.emit("username", userName);
    });

    socket.on("users", (users) => {
      setUsers(users);
    });

    socket.on("message", (message) => {
      console.log(message);
      // var id = message.id
      // console.log(users[id])
      setMessages((messages) => [...messages, message]);
    });
    socket.on("connected", (user) => {
      setUsers((users) => [...users, user]);
    });

    socket.on("disconnected", (id) => {
      setUsers((users) => {
        return users.filter((user) => user.id !== id);
      });
    });
  }, []);

  const handleMessageOut = (event) => {
    event.preventDefault();
    var newMessage = {
      message: message,
      username: userName,
    };
    socket.emit("send", newMessage);
    setMessage("");
  };

  return (
    
        <div className="sidenavchat">
            {/* <div>{JSON.stringify(messages)}</div> */}
            {/* <div>{message}</div>
    <div>{JSON.stringify(users)}</div> */}
            <div className="chatWindow">
              {!messages.length ? (
                <h1 className="chat-title">Chat with us!</h1>
                
              ) : (

                <div> 
                  {messages.map(({ user, date, text }, index) => (
                    <div
                      key={index}
                      className={user === userName ? "toLeft" : "toRight"}
                    >
                      {user}: {text}{" "}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <input className="chatBox"
              type="text"
              placeholder="message"
              value={message}
              onChange={(event) => setMessage(event.currentTarget.value)}
            />
            <button className="chatBtn" onClick={handleMessageOut}>submit</button>

            <div className="col-md-4 remove">
              <h3>Users</h3>
              <ul id="users">
                {users.map(({ name, id }) => (
                  <li key={id}>{name}</li>
                ))}
              </ul>
            </div>
        
        </div>
     
   
  );
}

export default Chat;
