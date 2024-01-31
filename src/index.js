const express = require("express");
const http =require("http");
const {Server: WebSocketServer} = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new WebSocketServer(server);

app.use(express.static(__dirname+"/public"))

io.on("connection",(socket)=>{
  // console.log("nueva conexion",socket.id);
  // //Emitiendo mi evento ping
  // socket.emit("ping");
  // socket.on("pong",()=>{
  //   console.log("ping");
  // })


})

server.listen(3000);
console.log("server on port",3000);
