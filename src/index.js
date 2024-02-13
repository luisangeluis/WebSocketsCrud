const express = require("express");
const http =require("http");
const {Server: WebSocketServer} = require("socket.io");
const {v4: uuid} = require("uuid");

const app = express();
const server = http.createServer(app);
const io = new WebSocketServer(server);

app.use(express.static(__dirname+"/public"))

const notes =[];

io.on("connection",(socket)=>{
  // console.log("nueva conexion",socket.id);
  socket.on("client:newnote",data=>{
    // console.log(data);
    const note ={title:data.title, description:data.description, id:uuid()}
    console.log(note);
    notes.push(note);
    
    socket.emit("server:notecreated",note)
  });

})

server.listen(3000);
console.log("server on port",3000);
