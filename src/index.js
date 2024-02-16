const express = require("express");
const http =require("http");
const {Server: WebSocketServer} = require("socket.io");
const {v4: uuid} = require("uuid");

const app = express();
const server = http.createServer(app);
const io = new WebSocketServer(server);

app.use(express.static(__dirname+"/public"))

let notes =[];

io.on("connection",(socket)=>{
  console.log("nueva conexion",socket.id);
  socket.emit("server:loadnotes",notes)

  socket.on("client:newnote",data=>{
    const note ={title:data.title, description:data.description, id:uuid()}
    
    notes.push(note);
    
    socket.emit("server:notecreated",note)
  });

  socket.on("client:deletenote",noteId=>{
    notes = notes.filter(note=>note.id !== noteId)
    console.log(notes);
    socket.emit("server:loadnotes",notes)
  })

  socket.on("client:updatenote",noteId=>{
    
    socket.emit("server:loadnotes",notes)
  })

})

server.listen(3000);
console.log("server on port",3000);
