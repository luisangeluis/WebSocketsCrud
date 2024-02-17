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
    
    // socket.emit("server:notecreated",note)
    io.emit("server:notecreated",note)
  });

  socket.on("client:deletenote",noteId=>{
    notes = notes.filter(note=>note.id !== noteId)
    // console.log(notes);
    // socket.emit("server:loadnotes",notes)
    io.emit("server:loadnotes",notes)
  })

  socket.on("client:getnote" ,noteId=>{
    // console.log(noteId);
    const note = notes.find(note=>note.id === noteId);
    // console.log(note);
    socket.emit("server:notefound",note)
    // socket.emit("server:")
  })

  socket.on("client:updatenote",updatedNote=>{
    console.log(updatedNote);    
    const index = notes.findIndex(note=>note.id === updatedNote.id);
    console.log([index]);
    if(index>-1) {
      notes[index].title=updatedNote.title;
      notes[index].description=updatedNote.description;
    }

    io.emit("server:loadnotes",notes)
  })


})

server.listen(3000);
console.log("server on port",3000);
