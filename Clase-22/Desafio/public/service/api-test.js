//get products in /api/productos-test

const getProducts = async () => {
  try {
    const response = await fetch('http://localhost:8080/api/productos-test');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

module.exports = getProducts;
