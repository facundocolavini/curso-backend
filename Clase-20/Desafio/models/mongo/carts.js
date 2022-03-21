const mongoose = require('mongoose');
class Cart {
  constructor() {
    const schema = new mongoose.Schema({
      products: {
        type: Array,
        default: [
          {
            quantity: { type: Number, default: 1 },
            id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
          },
        ],
      },
      timestamp: { type: Number, format: '%Y-%m-%d', default: Date.now() },
    });

    // Model
    this.model = mongoose.model('carritos', schema);
  }

  async createCart() {
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
    const cart = await this.model.findById(id);
    return cart;
  }

  async getProducts(id) {
    const cart = await this.getById(id);
    return cart.products;
  }

  async create(prod) {
    const product = await this.model.create(prod);
    console.log('----------PRODUCT CREATED----------');
    console.log(JSON.stringify(product, null, 2));

    return product;
  }

  async delete(id) {
    await this.model.findByIdAndDelete(id);
    console.log('--------------------');
    console.log('Cart Deleted');
  }

  async update(id, body) {
    const product = await this.model.updateOne({ _id: id }, body);
    console.log('--------------------');
    console.log('Cart Updated');
    return product;
  }

  async AllProducts(id) {
    const cart = await this.getById(id);
    return cart.products;
  }
}

module.exports = new Cart();
