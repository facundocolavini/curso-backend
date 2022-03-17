const express = require('express');
const mongoose = require('mongoose');

const { URI_CONNECTION } = require('./config/mongoConfig');
const adminMiddleware = require('./middlewares/adminAuth');
const productsRouter = require('./routes/products');

const app = express();
const PORT = process.env.PORT || 8080;

// conectarse a mongo
mongoose
  .connect(URI_CONNECTION)
  .then(() => {
    // middleware del body
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    // ruta de productos
    app.use('/api/productos', adminMiddleware, productsRouter);

    // listen
    app.listen(PORT, () =>
      console.log(`🚀 Server ready at http://localhost:${PORT}`)
    );
  })
  .catch((err) => console.log('error on mongo', err));
