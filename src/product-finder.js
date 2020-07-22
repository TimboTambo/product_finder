let getProductsData = require("./product-provider.js")

function getProduct(product) {
  let productObjects = getProductsData()
  return productObjects[product]
}

module.exports = getProduct
