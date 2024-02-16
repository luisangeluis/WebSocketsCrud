const socket = io("http://localhost:3000");

const saveNote=(title,description)=>{
  socket.emit("client:newnote",{ 
    title,
    description
  })
}

const deleteNote = id =>{
  console.log(id);
  socket.emit("client:deletenote",id)
}

const updateNote = id =>{
  console.log(id);
  socket.emit("client:updatenote", id)
}

socket.on("server:notecreated",appendNote);
socket.on("server:loadnotes",renderNotes);