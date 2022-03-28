const http = require('http');
const path = require('path');
const express = require('express');
const cors = require('cors');
const { Server } = require('socket.io');
require('dotenv').config();

const app = express();
const server = http.createServer(app);

const Model = require('./models/model');
const modelGames = new Model('../database/games.json');
const modelChat = new Model('../database/msgChat.json');
const io = new Server(server);

const productsRouter = require('./routes/products');
const mongoConnection = require('../config/cloudConnection');
const PORT = process.env.PORT || 8080;

//Conexion con mongo en la nube
mongoConnection();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static('public'));

//Routes
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/index.html'))
);

app.use('/api/productos-test', productsRouter);

//Socket
io.on('connection', async (socket) => {
  socket.emit('allgames');
  //Post
  socket.on('newGame', async (game) => {
    const newGame = await modelGames.add(game);
    socket.emit('games', newGame);
  });
  // Mensajes
  socket.emit('msgAll', await modelChat.getAll());

  // actualizacion de mensajes
  socket.on('newMsg', async (mgs) => {
    mgs.date = new Date().toLocaleString();
    await modelChat.add(mgs);
    socket.emit('msgs', await modelChat.getAll());
  });
});

server.listen(PORT, () => console.log(`Escuchando http://localhost:${PORT}`));
