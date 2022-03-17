const HOSTNAME = process.env.HOSTNAME;
const SCHEMA = process.env.SCHEMA;
const USER = process.env.USER;
const PASSWORD = process.env.PASSWORD;
const DATABASE = process.env.DATABASE;
const OPTIONS = process.env.OPTIONS;

console.log(SCHEMA);

const URI_CONNECTION =
  'mongodb+srv://facundo:38991520@cluster0.nilfq.mongodb.net/ecommerce?retryWrites=true&w=majority';

module.exports = {
  URI_CONNECTION,
};
