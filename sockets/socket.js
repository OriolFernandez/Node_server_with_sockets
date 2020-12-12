const { io } = require('../index');
const Items = require('../models/items');
const Item = require('../models/item');


const items = new Items();

items.addItem(new Item("Oli"));
items.addItem(new Item("Pa"));
items.addItem(new Item("Sal"));
items.addItem(new Item("Margarina"));

console.log("Server started");
//Mensajes de sockets
io.on('connection', client => {
    console.log("Cliente conectado");

    client.emit('current-items', items.getItems());
    client.on('disconnect', () => {
        console.log("Cliente desconectado")
    }); // listen to the event

    client.on('message', (payload) => {
        console.log('Message recived :', payload);
        client.broadcast.emit('message', payload);
    })
    client.on('increase-item', (payload) => {
        
        items.addItemNumber(payload['id']);
        console.log(items.getItems());
        io.emit('current-items', items.getItems());
    })
});
