const express = require("express");
const path = require('path');
require('dotenv').config();
const app = express();

const publicPath = path.resolve(__dirname, 'public');
//node server
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./sockets/socket');

console.log("path " + publicPath);

app.use(express.static(publicPath));


server.listen(process.env.PORT, (err) => {
    if (err) throw new Error(err);
    console.log("Server running in ", process.env.PORT);
})