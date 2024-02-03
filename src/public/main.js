const socket = io("http://localhost:3000");

socket.on("ping",()=>{
  // console.log("pong");
  // socket.emit("pong")
})

const noteForm = document.querySelector("#note-form");
const title = document.querySelector("#title");
const description = document.querySelector("#description");

noteForm.addEventListener("submit",(e)=>{
  e.preventDefault();

  socket.emit("client:newnote",{
    title:title.value,
    description:description.value
  })
})


 