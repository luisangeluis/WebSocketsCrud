const notesList = document.querySelector("#notes");
let savedId = "";

const noteUI =note=>{
  const div = document.createElement("div");

  div.innerHTML=`
    <article class="card card-body rounded-0 my-3">
      <div class="d-flex justify-content-between">
        <h2 class="card-title">${note.title}</h2>
          <div>
            <button class="btn btn-danger delete" data-id="${note.id}">Delete</button>
            <button class="btn btn-secondary update" data-id="${note.id}">Update</button>
          </div>
      </div>
      <p>${note.description}</p>
    </article>
  `;

  const btnDelete = div.querySelector(".delete");
  const btnUpdate = div.querySelector(".update");
  // console.log(btnDelete);
  console.log(btnUpdate);

  btnDelete.addEventListener("click",()=>{
    deleteNote(btnDelete.dataset.id)
  })

  btnUpdate.addEventListener("click",()=>{
    getNote(btnUpdate.dataset.id,)
  })
  
  return div;
}

const renderNotes=(notes)=>{
  notesList.innerHTML ="";
  notes.forEach(note => {
    notesList.append(noteUI(note))
  })
}

const appendNote=(note)=>{
  notesList.append(noteUI(note))
}
