const socket = io("http://localhost:3000");

const saveNote=(title,description)=>{
  socket.emit("client:newnote",{ 
    title,
    description
  })
}

socket.on("server:notecreated",note=>{
  console.log(note)
  appendNote(note)
});