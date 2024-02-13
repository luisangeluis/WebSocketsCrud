const notesList = document.querySelector("#notes");

const appendNote =note=>{
  console.log(note);
  notesList.innerHTML+=`
    <article class="card card-body rounded-0 my-3">
      <h2 class="card-title">${note.title}</h2>
      <p>${note.description}</p>
    </article>
  `;
}

// let usersContainer = document.querySelectorAll('.users');

// const appendUser = user => {
//   usersContainer.forEach(container => {
//     container.innerHTML += `<h2>${user.firstName}</h2>`
//   })
// }
