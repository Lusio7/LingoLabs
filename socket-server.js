const server = require("http").createServer();
const io = require("socket.io")(server, {
  transports: ["websocket", "polling"]
});
const users = {};
io.on("connection", client => {
  client.on("username", username => {
    console.log(username)
    const user = {
      name: username,
      id: client.id
    };
    users[client.id] = user;
    // console.log(user);
    // console.log(users);
    // console.log(client.id)
    io.emit("connected", user);
    io.emit("users", Object.values(users));
  });

  client.on("send", message => {
    // console.log(message);
    // console.log(client.id)
    // console.log(users)
    // console.log(users[client.id])
    // var id = client.id;
    // console.log(id)
    io.emit("message", {
      text: message.message,
      date: new Date().toISOString(),
      user: message.username
    });
  });

  client.on("disconnect", () => {
    const username = users[client.id];
    delete users[client.id];
    io.emit("disconnected", client.id);
  });
});
server.listen(3000);
