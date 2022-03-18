const cartsModel = require('../../models/mongo/carts');

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
      const carts = await cartsModel.create();
      res.status(201).send(carts);
    } catch (e) {
      console.log(e);
      res.status(500).send({
        error: e.message,
      });
    }
  },
  /* ,
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

  delete: async (req, res) => {
    const { id } = req.params;
    try {
      await cartsModel.delete(id);
      res.status(200).send({
        message: 'Producto eliminado',
      });
    } catch (e) {
      console.log(e);
      res.status(500).send({
        error: e.message,
      });
    }
  }, */
};
