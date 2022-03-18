const mongoose = require('mongoose');
class Product {
  constructor() {
    const schema = new mongoose.Schema({
      products: [],
      timestamp: { type: Number, format: '%Y-%m-%d', default: Date.now() },
    });

    // Model
    this.model = mongoose.model('carts', schema);
  }

  async create() {
    //Add a new cart
    const cart = await this.model.create({
      products: [],
      timestamp: Date.now(),
    });
    console.log('--------------------');
    console.log(JSON.stringify(cart, null, 2));
    return cart;
  }

  async getAll() {
    //Get all carts created
    const carts = await this.model.find();
    console.log(`Carts en DB: ${carts.length}`);

    // projections de mongo
    return await this.model.find(
      {},
      {
        products: 1,
        timestamp: 1,
      },
    );
  }

  async getById(id) {
    console.log(id);
    const product = await this.model.findById(id);
    console.log(product);
    return product;
  }

  async update(id, body) {
    const product = await this.model.findByIdAndUpdate(id, body);
    console.log('--------------------');
    console.log('Producto actualizado');
    return product;
  }

  async delete(id) {
    await this.model.findByIdAndDelete(id);
    console.log('--------------------');
    console.log('Producto eliminado');
  }
}

module.exports = new Product();
