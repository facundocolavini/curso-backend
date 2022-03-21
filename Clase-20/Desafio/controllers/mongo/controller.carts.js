const cartsModel = require('../../models/mongo/carts');
const productsModel = require('../../models/mongo/products');

module.exports = {
  get: async (req, res) => {
    try {
      const carts = await cartsModel.getAll();
      res.send(carts);
    } catch (e) {
      console.log(e);
      res.status(500).send({
        error: e.message,
      });
    }
  },
  post: async (req, res) => {
    try {
      const carts = await cartsModel.createCart();
      res.status(201).send(carts);
    } catch (e) {
      console.log(e);
      res.status(500).send({
        error: e.message,
      });
    }
  },
  getById: async (req, res) => {
    const { id } = req.params;
    try {
      const product = await cartsModel.getById(id);
      res.send(product);
    } catch (e) {
      console.log(e);
      res.status(500).send({
        error: e.message,
      });
    }
  },
  getProducts: async (req, res) => {
    const { id } = req.params;
    try {
      const products = await cartsModel.getProducts(id);
      res.send(products);
    } catch (e) {
      console.log(e);
      res.status(500).send({
        error: e.message,
      });
    }
  },
  delete: async (req, res) => {
    const { id } = req.params;
    try {
      await cartsModel.delete(id);
      res.status(200).send({
        message: 'Eliminado',
      });
    } catch (e) {
      console.log(e);
      res.status(500).send({
        error: e.message,
      });
    }
  },
  addProduct: async (req, res) => {
    const { id, id_prod } = req.params;
    try {
      //verificar si el carrito existe y el producto  esta en la db
      const cart = await cartsModel.getById(id);
      const isProdExist = await productsModel.getById(id_prod);
      const prodArray = cart.products;
      const isProdInCart = prodArray.findIndex((prod) => prod.id_prod === id_prod);
      if (isProdInCart) {
      }

      res.send(isProdInCart);
    } catch (e) {
      console.log(e);
      res.status(500).send({
        error: e.message,
      });
    }
  },
  /* ,

  put: async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
      const product = await cartsModel.update(id, body);
      res.status(200).send(product);
    } catch (e) {
      console.log(e);
      res.status(500).send({
        error: e.message,
      });
    }
  },

   */
};
