//Ruta de io opcional si no la pones tomas el del server
// io('http://localhost:3000');
const socket = io();

socket.on('ping', () => {
    console.log('Escuchando al servidor')
    socket.emit('pong')
});