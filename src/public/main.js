socket.on("ping",()=>{
  // console.log("pong");
  // socket.emit("pong")
})

const noteForm = document.querySelector("#note-form");
const title = document.querySelector("#title");
const description = document.querySelector("#description");

noteForm.addEventListener("submit",(e)=>{
  e.preventDefault();

  if(savedId){
    updateNote(savedId,title.value,description.value)
  }else{
    saveNote(title.value, description.value);
  }

  title.value="";
  description.value="";

  title.focus();
})


 