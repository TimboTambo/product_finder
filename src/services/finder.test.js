let ProductFinder = require("./finder.js")
const product = require("../models/product.js")

describe("Product Finder Test", () => {
  test("returns product when product exists", () => {
    let mockDataSource = () => {
      let mockProduct = new product(
        "PL1000",
        "test-name",
        "test-dose",
        "test-substance",
        "test-url"
      )
      return { PL1000: mockProduct }
    }
    let finder = new ProductFinder(mockDataSource)
    let result = finder.getProduct("PL1000")
    expect(result).toBeInstanceOf(product)
  })
  // test("check if Product name matches", () => {
  //   let result = getProduct("PL1000").name
  //   let expected = "test-name"
  //   expect(result).toBe(expected)
  // })
})
