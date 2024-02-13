socket.on("ping",()=>{
  // console.log("pong");
  // socket.emit("pong")
})

const noteForm = document.querySelector("#note-form");
const title = document.querySelector("#title");
const description = document.querySelector("#description");

noteForm.addEventListener("submit",(e)=>{
  e.preventDefault();

  saveNote(title.value, description.value);
})


 