const express = require("express");
const http =require("http");
const {Server: WebSocketServer} = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new WebSocketServer(server);

app.use(express.static(__dirname+"/public"))

io.on("connection",(socket)=>{
  // console.log("nueva conexion",socket.id);
  socket.on("client:newnote",data=>{
    console.log(data);
  });


})

server.listen(3000);
console.log("server on port",3000);
