//Ruta de io opcional si no la pones tomas el del server
// io('http://localhost:3000');

// socket.on('ping', () => {
//     console.log('Escuchando al servidor')
//     socket.emit('pong')
// });

const userForm = document.querySelector('#user-form');
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');

userForm.addEventListener('submit', e => {
  e.preventDefault();
  // console.log('click');

  const newWUser = { firstName: firstName.value, lastName: lastName.value };

  saveUser(newWUser);



})