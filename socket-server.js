const {Server} = require ("ws");

const wss = new Server({ port :"3002"});

wss.on("connection", function(ws){
    ws.on("message", function(message){
        message = JSON.parse(message);

        if(message.type === "name"){
            ws.personName = message.data;
        }
        console.log("received :" + message);
        wss.clients.forEach(function e(client){
            if (client!==ws)
            client.send(JSON.stringify({
                name: client.personName, data:message.data
            }));

        })
        // ws.send("from server: "+ message);

        
    });
    ws.on("close",function(){
        console.log("I lost a client");
    })

    console.log("one more client connected");

})
    
