
const Contenedor = require('./clase');

const nuevoProducto = new Contenedor("./productos.txt");


//Descomentar una de las siguientes lineas para probar el metodo y volver a comentar las otras
/* nuevoProducto.save({
    title: 'Globo Terráqueo',                                                                                                                          
      price: 345.67,                                                                                                                                     
      thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png',                                   
      id: 3  
}) */

/* nuevoProducto.getById(2); */
/* nuevoProducto.getAll(); */
/* nuevoProducto.deleteById(3); */
/* nuevoProducto.deleteAll(); */
/* nuevoProducto.getAll(); */