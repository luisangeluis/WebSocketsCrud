//Dependencies
const express = require('express');
const WSServer = require('socket.io');
//Obteniendo el Server de websocket
const WebSocketServer = WSServer.Server;

const http = require('http')
const app = express();

//Inyectando express en http
const myServer = http.createServer(app);
const io = new WebSocketServer(myServer);

app.use(express.static(__dirname + '/public'));

io.on('connection', (socket) => {
    console.log('nueva conexion:', socket.id);
    // socket.emit('ping');
    // socket.on('pong',()=>{
    //     console.log('Escuchando al cliente');
    // })

    socket.on('client:newuser', (data) => {
        console.log('hola');
        console.log(data);
    })
})


myServer.listen(3000);
console.log('Server on port', 3000);