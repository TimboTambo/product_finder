const product = require("./models/product.js")

function getProductsData() {
  product1 = new product("PL123456", "name", "dose", "substance", "url")
  product2 = new product("PL513872", "name", "dose", "substance", "url")
  product3 = new product("PL999999", "name", "dose", "substance", "url")
  product4 = new product("PL654321", "name", "dose", "substance", "url")
  product5 = new product("PL818181", "name", "dose", "substance", "url")
  let products = [product1, product2, product3, product4, product5]

  let productObjects = {}
  for (let i = 0; i < products.length; i++) {
    let product = products[i]
    productObjects[product.plNumber] = product
  }

  return productObjects
}

module.exports = getProductsData
