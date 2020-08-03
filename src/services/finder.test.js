let ProductFinder = require("./finder.js")
const product = require("../models/product.js")

function setup(name) {
  let mockProduct = new product(
    "PL1000",
    name,
    "test-dose",
    "test-substance",
    "test-url"
  )
  return () => {
    return { PL1000: mockProduct }
  }
}

describe("Product Finder Test", () => {
  test("returns product when product exists", () => {
    let mockDataSource = setup("test-name")

    let finder = new ProductFinder(mockDataSource)
    let result = finder.getProduct("PL1000")
    expect(result).toBeInstanceOf(product)
  })
  test("check if Product name matches", () => {
    let expected = "test-name"
    let mockDataSource = setup(expected)

    let finder = new ProductFinder(mockDataSource)
    let result = finder.getProduct("PL1001").name

    expect(result).toBe(expected)
  })
})
