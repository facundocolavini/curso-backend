const express = require('express');
const path = require('path');
const http = require('http');
const { Server } = require('socket.io');


const app = express()
const server = http.createServer(app)
const io = new Server(server)

app.use("/static", express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public/index.html')))

const PORT = process.env.PORT || 8080;

io.on('connection', (socket) => {
    console.log(`Usuario conectado ${socket.id}`);
})


server.listen(8080, () => console.log(`listening on http://localhost:8080`))