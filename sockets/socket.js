const {io} = require('../index');

//Mensajes de sockets
io.on('connection', client => {
    console.log("Cliente conectado");

    client.on('disconnect', () => {
        console.log("Cliente desconectado")
    }); // listen to the event

    client.on('message', (payload) => {
        console.log('Message recived :',payload['name']);

        io.emit('message',{admin:"Jose"});
    })
});
