//Dependencies
const express = require('express');
const WSServer = require('socket.io');
//Obteniendo el Server de websocket
const WebSocketServer = WSServer.Server;
const uuid = require('uuid')

const http = require('http')
const app = express();

//Inyectando express en http
const myServer = http.createServer(app);
const io = new WebSocketServer(myServer);

const users = [];

app.use(express.static(__dirname + '/public'));

io.on('connection', (socket) => {
  console.log('nueva conexion:', socket.id);
  // socket.emit('ping');
  // socket.on('pong',()=>{
  //     console.log('Escuchando al cliente');
  // })

  socket.on('client:newuser', (user) => {
    const newUser = { firstName: user.firstName, lastName: user.lastName, id: uuid.v4() };
    // console.log(newUser);
    users.push(newUser)

    socket.emit('server:newuser', newUser)
  })
})


myServer.listen(3000);
console.log('Server on port', 3000);