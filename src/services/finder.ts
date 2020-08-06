export default class ProductFinder {
  constructor(dataSource) {
    this.dataSource = dataSource
  }

  getProduct(product: string) {
    let productObjects = this.dataSource()
    return productObjects[product]
  }
}
