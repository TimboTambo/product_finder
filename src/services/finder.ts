class ProductFinder {
  constructor(dataSource) {
    this.dataSource = dataSource
  }

  getProduct(product) {
    let productObjects = this.dataSource()
    return productObjects[product]
  }
}

module.exports = ProductFinder
