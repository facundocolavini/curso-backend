const express = require('express');
const moment = require('moment');
const app = express();
const Contenedor = require('./clase');

const nuevoProducto = new Contenedor("./productos.txt");
const PORT = process.env.PORT || 8080;

const server = app.listen(PORT,()=>{
    console.log(`Server on port ${PORT}`);  
}) 

server.on("error",(err)=>{
    console.log(`Error: ${err.message}`);
})

// Rutas 

app.get('/productos', (req, res) => {
    nuevoProducto.getAll()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.send(err);
    })
})

app.get('/productoRandom',(req,res)=>{
  nuevoProducto.getProductRandom()
  .then(productRandom =>{
        res.json(productRandom);
  })
  .catch(err =>{
      res.send(`<h1>${err}</h1>`);
  })


})
