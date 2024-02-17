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

const getNote = id =>{
  socket.emit("client:getnote",id)
}

const updateNote = (id,title,description) =>{
  console.log(id);
  socket.emit("client:updatenote", {id,title,description})
}

socket.on("server:notecreated",appendNote);

socket.on("server:loadnotes",renderNotes);

socket.on("server:notefound",note =>{
  const title = document.querySelector("#title");
  const description = document.querySelector("#description");

  title.value = note.title;
  description.value = note.description;

  savedId = note.id;
})